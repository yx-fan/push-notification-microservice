import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

const PROTO_PATH = path.join(__dirname, './notification.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const grpcObject = grpc.loadPackageDefinition(packageDefinition) as any;
const notificationPackage = grpcObject.notification;

const client = new notificationPackage.NotificationService('localhost:50052', grpc.credentials.createInsecure());

const request = {
    platform: 'android',
    region: 'us',
    token: 'example_token',
    title: 'Test Notification',
    body: 'This is a test notification body.',
    other: 'test data',
};

client.SendNotification(request, (error: grpc.ServiceError | null, response: any) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Response:', response);
    }
});
