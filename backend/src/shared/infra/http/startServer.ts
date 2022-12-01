import express, { Express, Request, Response } from 'express';
import { v1Router } from './routes/v1';

export async function startServer(app: Express) {
  app.use(express.json());

  app.get('/ping', (req: Request, res: Response) => {
    return res.status(200).json({ status: 'ok' });
  });

  app.use('/v1', v1Router);
}
