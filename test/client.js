"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var path = require("path");
// 加载 proto 文件
var PROTO_PATH = path.join(__dirname, './notification.proto');
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
var grpcObject = grpc.loadPackageDefinition(packageDefinition);
var notificationPackage = grpcObject.notification;
// 创建 gRPC 客户端
var client = new notificationPackage.NotificationService('localhost:50052', grpc.credentials.createInsecure());
// 调用 SendNotification 方法
var request = {
    platform: 'android',
    region: 'us',
    token: 'example_token',
    title: 'Test Notification',
    body: 'This is a test notification body.',
    data: { key1: 'value1', key2: 'value2' },
};
client.SendNotification(request, function (error, response) {
    if (error) {
        console.error('Error:', error.message);
    }
    else {
        console.log('Response:', response);
    }
});
