## [1.0.3] - 2024-08-16
### Added
- **Significant** This version focuses on code level security, stability and readability improvements
- Added slim version of the grpcui server to reduce the image size in the docker container
- Added more packages to increase stability and security of the application

### Changed
- Ignored unnecessary files to increse the security of the application
- Put all the example files in the docker folder to avoid exposing the sensitive information
- Included all json files when building the TypeScript files to avoid missing files in the docker container

### Fixed
- Fixed capital letter issue for ubuntu environment

### Documentation
- Added documents in docs to illstrate the flow of the application
- Added README.md to provide the instruction to run the application

## [1.0.2] - 2024-08-15
### Added
- **Significant** Added **grpc** server to handle the push notification request from other services
- Added related packages and dependencies to support the **grpc** server including `grpc`, `@grpc/grpc-js`, `@grpc/proto-loader` etc.
- Added grpcui server to provide a web interface to interact with the grpc server
- Added proto file to define the service and message structure for the grpc server
- Added test client to test the grpc server
- Added controller to handle the grpc server request and response
- Added go environment to support the grpc server

### Changed
- Updated docker file to include the grpc server
- Updated docker file to include the grpcui server

### Documentation
- Provided grpcui web interface to interact with the grpc server

## [1.0.1] - 2024-08-14
### Added
- **Significant** Added initialization module of providers when the server starts, to ensure that all providers are loaded and ready to be used
- **Significant** Integrated firebase configuration file and related environment variables
- **Significant** Added platform and region handler to handle the request and return the appropriate provider
- **Significant** Added notification service to handle the notification logic
- **Significant** Added firebase provider to handle the notification for android devices

### Changed
- Updated the naming method for classes and files to follow the naming convention
- Updated the naming method for other variables and functions to follow the naming convention

### Documentation
- Provided two sequence diagrams to illustrate the flow of the application

## [1.0.0] - 2024-08-13

### Added
- Initial release, project is built on top of `Node.js` and `Express.js`, with `TypeScript` as the main language
- Added all the necessary files to build and start the project
- Setup docker and docker-compose
- Project is ready to be further developed, tested and deployed
