import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateElectionUseCase } from './UpdateElectionUseCase';

class UpdateElectionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { electionId, data } = request.body;
    if (!electionId || !data)
      return response.status(400).json({ error: 'Missing data' });

    const updateElectionUseCase = container.resolve(UpdateElectionUseCase);
    const election = await updateElectionUseCase.execute(electionId, data);

    return response.status(201).json(election);
  }
}

export default new UpdateElectionController();
