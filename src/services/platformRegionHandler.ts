import FirebaseProvider from "../providers/firebaseProvider";
import NotificationProvider from "../providers/notificationProvider";

class PlatformRegionHandler {

    private providers: { [key: string]: NotificationProvider } = {};

    constructor() {
        this.providers['firebase'] = FirebaseProvider;
    }

    // Purpose: Get the provider based on the platform and region.
    getProvider(platform: string, region: string): NotificationProvider {
        if (platform === 'android') {
            return this.providers['firebase'];
        }

        return this.providers['firebase'];
    }
}

export default new PlatformRegionHandler();
