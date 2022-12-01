import CreateElectionController from '@modules/election/useCases/createElection/CreateElectionController';
import FindCurrentElectionController from '@modules/election/useCases/findCurrentElection/FindCurrentElectionController';
import UpdateElectionController from '@modules/election/useCases/updateElection/UpdateElectionController';
import { Router } from 'express';

export const electionRouter = Router();

electionRouter.post('/create', (req, res) => {
  CreateElectionController.handle(req, res);
});

electionRouter.get('/current', (req, res) => {
  FindCurrentElectionController.handle(req, res);
});

electionRouter.patch('/update', (req, res) => {
  UpdateElectionController.handle(req, res);
});
