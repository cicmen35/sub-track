import { config } from 'dotenv';

config({ path: `.env.${process.eventNames.NODE_ENV || 'development}'}.local` });

export const { 
    PORT, NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN
} = process.env;
