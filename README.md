# Push Notification Service

This project is a push notification service that uses Node.js and gRPC. It also includes `grpcui`, a web-based user interface for interacting with gRPC services.

## Table of Contents

- [Prerequisites](#prerequisites)
- [gRPC and grpcui Setup in Docker](#grpc-and-grpcui-setup-in-docker)
- [Package Scripts](#package-scripts)
- [Starting the Service](#starting-the-service)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## gRPC and grpcui Setup in Docker

To set up the gRPC server and the grpcui server, follow these steps:

### 1. RPC Setup

The gRPC service is implemented using the following key components:

- **Proto file**: Located at `src/api/v1/push_notification.proto`, this file defines the service and message structure for the gRPC server.
- **gRPC server**: The server is implemented in `src/grpcServer.ts` and listens for incoming requests from other services, it runs on port `50052`.
- **gRPC service**: The service is implemented in `src/services/pushNotificationService.ts` and handles the business logic for the gRPC server.

### 2. grpcui Setup

The grpcui server provides a web interface to interact with the gRPC server. It is configured in the `Dockerfile` and runs on port `51732`.

- **Installation**: It is installed during the docker build process using Go.
- **Startup**: The `grpcui` is started with a slight delay (5 seconds) to ensure the gRPC server is fully operational before `grpcui` attempts to connect.
- **Dockerfile Keypoints**:

```Dockerfile
RUN apt-get update && apt-get install -y golang-go
RUN go install github.com/fullstorydev/grpcui/cmd/grpcui@latest
...
CMD ["sh", "-c", "npm start & sleep 5 && grpcui -plaintext -port 51732 -bind 0.0.0.0 localhost:50052"]
```

## Package Scripts

The following package scripts are available:

- `npm build`: Compiles the TypeScript files to JavaScript.
- `npm start`: Starts the nodejs server, gRPC server, and grpcui server at the same time.
- `npm dev`: Starts the nodejs server in development mode.
- `npm copy-proto`: Copies the proto file to the dist folder. This script is included in the `npm build` script.
- `npm compile-proto`: Compiles the proto file to TypeScript. This script is included in the `npm build` script.

## Starting the Service

To start the service, follow these steps:

### 1. Install Dependencies

First, ensure that all dependencies are installed by running:

```bash
npm install
```

### 2. Create necessary files

(1) Create `.dev` file for starting locally

The `.env` file is used to store environment variables that are needed when running the service locally. You can create this file in the root directory of the project.

Here is an example of what the `.env` file might contain:

```bash
LOG_LEVEL = debug or info or error
PORT = 0000
NODE_ENV = development or production or test
FIREBASE_CREDENTIALS = ./src/config/firebase-credentials.json
FIREBASE_DATABASE_URL = 'https://web3-community-xxxxx-default-xxxx.firebaseio.com/'
GRPC_PORT = 00000
```

Make sure that the path to your Firebase credentials (FIREBASE_CREDENTIALS) and any other sensitive information is correctly set.

(2) Put your `firebase-credentials.json` secret file into `src/config` folder

After finishing this step, you can start all the services locally now.

(3) Create all the docker related files on root

You can find all the docker related files from the docker.example folder.

You should copy all the files from the folder and put them on the root, making necessary changes on those files.

In most cases, you just need to change the ports to the ports that you want to set.
