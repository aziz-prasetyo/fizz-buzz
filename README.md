# Fizz Buzz

A local-first game where you must keep playing as long as you have time.

## Features

- **Infinite Survival Mode**: Keep playing as long as you have time.
- **Dynamic Timer**: 10 seconds per question. Correct answers reset the timer; wrong answers apply a time penalty.
- **Local-First**: High scores and game history are saved to your browser's `localStorage`.
- **Responsive UI**: Polished look, optimized for mobile and desktop.

## Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Test with Local Docker

Before deploying to the cloud, you can test the production build locally using Docker to ensure everything is configured correctly.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine.

### Steps

**Option A: Using npm scripts (Easiest)**

1. **Build and Run:**
   ```bash
   npm run docker:build
   npm run docker:run
   ```

**Option B: Using Docker Compose**

1. **Start the app:**
   ```bash
   docker-compose up --build
   ```

**Option C: Manual commands**

1. **Build the Docker image:**
   Run this command in the project root directory. This uses the provided `Dockerfile` to build the app.

   ```bash
   docker build -t fizz-buzz .
   ```

2. **Run the Docker container:**
   Start the container and map port 8080 from the container to your local machine.

   ```bash
   docker run -p 8080:8080 fizz-buzz
   ```

3. **Verify:**
   Open your browser and navigate to `http://localhost:8080`. You should see the game running. Stop the container with `Ctrl+C` when done.

## Deployment to Google Cloud Run

This app is ready to be deployed to Google Cloud Run, a serverless platform that automatically scales your application. These instructions assume you are starting from scratch.

### Step 1: Set Up Google Cloud

1. **Create an Account**: Go to [Google Cloud Console](https://console.cloud.google.com/) and sign up or log in.
2. **Create a Project**: Click the project drop-down at the top of the page and select "New Project". Give it a name (e.g., `fizz-buzz-app`) and click "Create".
3. **Enable Billing**: Cloud Run requires an active billing account, even though it has a generous free tier. Go to the "Billing" section in the console and link a billing account to your project.

### Step 2: Install and Configure Google Cloud CLI

The Google Cloud CLI (`gcloud`) is a tool to manage your Google Cloud resources from your terminal.

1. **Install the CLI**: Follow the official instructions for your operating system:
   - [macOS](https://cloud.google.com/sdk/docs/install#mac)
   - [Windows](https://cloud.google.com/sdk/docs/install#windows)
   - [Linux](https://cloud.google.com/sdk/docs/install#linux)
2. **Initialize and Authenticate**: Open your terminal and run:
   ```bash
   gcloud init
   ```
   This will open a browser window to log in to your Google account.
3. **Select Your Project**: During the `gcloud init` process, select the project you created in Step 1. If you need to set it manually later, run:
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```
   _(You can find your Project ID on the Google Cloud Console dashboard)._

### Step 3: Deploy the Application

Now you are ready to deploy the app directly from your source code.

1. **Enable Required APIs**:
   Your project needs permission to build containers and run them. Run this command:

   ```bash
   gcloud services enable artifactregistry.googleapis.com run.googleapis.com
   ```

2. **Deploy to Cloud Run**:
   Run this command in the root directory of your project (where the `Dockerfile` is located):

   ```bash
   gcloud run deploy fizz-buzz --source . --region=us-central1 --allow-unauthenticated
   ```

   - `--source .`: Tells Cloud Run to build the container from the current directory using the Dockerfile.
   - `--region=us-central1`: Specifies where to host your app. You can change this to a region closer to you.
   - `--allow-unauthenticated`: Makes your game accessible to anyone on the internet.

3. **Access Your Live App**:
   The deployment process will take a few minutes as it builds the container and provisions the server. Once finished, the terminal will display a **Service URL** (e.g., `https://fizz-buzz-[hash]-uc.a.run.app`). Open this link in your browser to play your live game!
