# Base image with Bun for building
FROM oven/bun:alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json ./
RUN bun install

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Runner stage - Minimal Alpine for the smallest possible footprint
FROM alpine:3.20 AS runner
WORKDIR /app

# Install minimal runtime dependencies for Bun (libstdc++ and libgcc)
RUN apk add --no-cache libstdc++ libgcc

# Copy the Bun binary from the official image
COPY --from=oven/bun:alpine /usr/local/bin/bun /usr/local/bin/bun

ENV NODE_ENV=production
ENV PORT=8080

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .

USER sveltekit

EXPOSE 8080

# Execute with Bun for maximum performance and minimum overhead
CMD ["/usr/local/bin/bun", "run", "build/index.js"]
