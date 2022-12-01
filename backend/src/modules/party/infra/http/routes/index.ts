import CreatePartyController from '@modules/party/useCases/createParty/CreatePartyController';
import { Router } from 'express';

export const partyRouter = Router();

partyRouter.post('/create', (req, res) => {
  CreatePartyController.handle(req, res);
});
