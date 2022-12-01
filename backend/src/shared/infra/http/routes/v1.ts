import { electionRouter } from '@modules/election/infra/http/routes';
import { Router } from 'express';

export const v1Router = Router();

v1Router.use('/election', electionRouter);
