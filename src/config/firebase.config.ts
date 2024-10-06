import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccountPath = process.env.FIREBASE_CREDENTIALS;
const databaseURL = process.env.FIREBASE_DATABASE_URL;

export { admin, serviceAccountPath, databaseURL };