# Base image for building
FROM node:24-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production dependencies stage
FROM base AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev || true
RUN mkdir -p node_modules

# Production runner stage - Using bare Alpine for minimum size
FROM alpine:3.20 AS runner
WORKDIR /app

# Install minimal runtime dependencies for Node.js
RUN apk add --no-cache libstdc++ libgcc

# Copy the Node.js binary from the official image
COPY --from=node:24-alpine /usr/local/bin/node /usr/local/bin/node

ENV NODE_ENV=production
ENV PORT=8080

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

COPY --from=builder /app/build ./build
COPY --from=prod-deps /app/node_modules ./node_modules
COPY package.json .

USER sveltekit

EXPOSE 8080

CMD ["node", "build/index.js"]
