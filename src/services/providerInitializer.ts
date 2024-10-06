import FirebaseProvider from "../providers/firebaseProvider";
import logger from "../utils/logger";

class ProviderInitializer {
    
    private providers = [FirebaseProvider];

    // Purpose: Initialize all providers
    async initializeAllProviders(): Promise<void> {

        for (const provider of this.providers) {
            try {
                await provider.initialize();
            } catch (error: any) {
                logger.error(`Failed to initialize provider: ${error.message}`);
                throw error;
            }
        }
    }
}

export default new ProviderInitializer();
