import express, { Express, Request, Response } from 'express';

export async function startServer(app: Express) {
  app.use(express.json());

  app.get('/ping', (req: Request, res: Response) => {
    return res.status(200).json({ status: 'ok' });
  });
}
