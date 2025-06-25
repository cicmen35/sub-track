import { config } from 'dotenv';

config({ path: `.env.${process.eventNames.NODE_ENV || 'development}'}.local` });

export const { PORT, NODE_ENV } = process.env;
