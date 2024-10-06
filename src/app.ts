import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './utils/logger';


async function createApp() {

    const app = express();

    // Middleware
    logger.info('Enabling CORS');
    app.use(cors());
    logger.info('Parsing request body');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    logger.info('Setting up root route');
    app.get('/', (req, res) => {
        logger.info('Root endpoint hit');
        res.send('Welcome to Push Notification Service');
    });


    return app;
}



export default createApp;