import PlatformRegionHandler from "./platformRegionHandler";
import customError from "../utils/customError";
import logger from "../utils/logger";

class NotificationService {
    
    /**
     * Send notification to the given platform and region
     * @param platform (android, ios)
     * @param region (us, eu, cn)
     * @param token (device token)
     * @param title (notification title)
     * @param body (notification body)
     * @param data (notification data)
     */
    async sendNotification(platform: string, region: string, token: string, title: string, body: string, data: any = {}): Promise<void> {
        try {
            const provider = PlatformRegionHandler.getProvider(platform, region);
            await provider.sendNotification(token, title, body, data);
        } catch (error: any) {
            logger.error(`Failed to send notification: ${error.message}`);
            throw new customError('Failed to send notification', 500);
        }
    }

}

export default new NotificationService();
