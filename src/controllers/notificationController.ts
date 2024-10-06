import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import NotificationService from '../services/notificationService';

class NotificationController {

    // Push notification by platform, region and token
    async sendNotification(
        call: ServerUnaryCall<any, any>,
        callback: sendUnaryData<any>
    ) {
        let { platform, region, token, title, body, other } = call.request;
        if (!platform || !region || !token || !title || !body) {
            callback({
                code: 3,
                message: 'Missing required fields',
            });
            return;
        }

        platform = platform.toLowerCase();
        region = region.toLowerCase();

        try {
            await NotificationService.sendNotification(platform, region, token, title, body);
            callback(null, { success: true, message: 'Notification sent successfully' });
        } catch (error: any) {
            callback({
                code: 13,
                message: error.message,
            });
        }
    }
}

export default new NotificationController();
