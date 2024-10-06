import { admin, serviceAccountPath, databaseURL } from '../config/firebase.config';
import * as fs from 'fs';
import NotificationProvider from './notificationProvider';
import logger from '../utils/logger';

// Purpose: FirebaseProvider class that implements NotificationProvider interface.
class FirebaseProvider implements NotificationProvider {
    private initialized = false;

    async initialize(): Promise<void> {
        if (!this.initialized) {
            try {
                // Read the service account file and parse it to JSON.
                const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath as string, 'utf8'));

                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
                    databaseURL: databaseURL,
                });

                this.initialized = true;
                logger.info('Firebase provider initialized');
            } catch (error: any) {
                logger.error(`Failed to initialize Firebase provider: ${error.message}`);
                throw error;
            }
        }
    }

    async sendNotification(token: string, title: string, body: string, data: any = {}): Promise<void> {
        const message = {
            notification: { title, body },
            token,
            data,
        };
        await admin.messaging().send(message);
    }
}

export default new FirebaseProvider();
