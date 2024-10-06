import dotenv from 'dotenv';
import createApp from './src/app';
import ProviderInitializer from './src/services/providerInitializer';
import logger from './src/utils/logger';
import getServer from './src/grpcServer';
import * as grpc from '@grpc/grpc-js';


dotenv.config();

async function startServer() {
    try {
        logger.info('>>> Initializing providers <<<');
        await ProviderInitializer.initializeAllProviders();

        logger.info('>>> Creating the app <<<');
        const app = await createApp();

        logger.info('>>> Starting the server <<<');
        const PORT = process.env.PORT || 3010;
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });

        logger.info('>>> Starting gRPC server <<<');
        const server = getServer();
        const GRPC_PORT = process.env.GRPC_PORT || 50052;
        server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), () => {
            logger.info(`gRPC server running at http://0.0.0.0:${GRPC_PORT}`);
        });

    } catch (error: any) {
        logger.error(`Failed to start server: ${error.message}`);
        process.exit(1);
    }

}

startServer();
