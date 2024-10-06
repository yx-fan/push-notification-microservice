// Purpose: Interface for NotificationProvider.
interface NotificationProvider {
    sendNotification(token: string, title: string, body: string, data?: any): Promise<void>;
}

export default NotificationProvider;
