import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import NotificationController from './controllers/notificationController';
import { ReflectionService } from '@grpc/reflection'; 

const PROTO_PATH = path.join(__dirname, './api/v1/notification.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const grpcObject = grpc.loadPackageDefinition(packageDefinition) as any;
const notificationPackage = grpcObject.notification;

function getServer(): grpc.Server {
    const server = new grpc.Server();
    server.addService(notificationPackage.NotificationService.service, {
        sendNotification: NotificationController.sendNotification,
    });

    const reflection = new ReflectionService(packageDefinition);
    reflection.addToServer(server);

    return server;
}

export default getServer;