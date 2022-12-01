import { ICreateElectionDTO } from '@modules/election/dtos/ICreateElectionDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateElectionUseCase } from './CreateElectionUseCase';

class CreateElectionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, type, year }: ICreateElectionDTO = request.body;
    if (!name || !type || !year) {
      return response.status(400).json({ error: 'Missing data' });
    }

    const createElectionUseCase = container.resolve(CreateElectionUseCase);
    const election = await createElectionUseCase.execute({
      name,
      type,
      year,
    });

    if (election.error)
      return response.status(400).json({ error: election.error });

    return response.status(201).json(election);
  }
}

export default new CreateElectionController();
