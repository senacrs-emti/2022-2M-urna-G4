import express from 'express';
import { startServer } from './startServer';

const app = express();
startServer(app);

export { app };
