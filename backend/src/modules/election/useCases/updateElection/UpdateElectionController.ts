import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateElectionUseCase } from './UpdateElectionUseCase';

class UpdateElectionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, data } = request.body;
    if (!id || !data)
      return response.status(400).json({ error: 'Missing data' });

    const updateElectionUseCase = container.resolve(UpdateElectionUseCase);
    const election = await updateElectionUseCase.execute({ id, data });

    return response.status(201).json(election);
  }
}

export default new UpdateElectionController();
