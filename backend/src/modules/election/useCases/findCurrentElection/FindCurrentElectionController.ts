import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindCurrentElectionUseCase } from './FindCurrentElectionUseCase';

class FindCurrentElectionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findCurrentElectionUseCase = container.resolve(
      FindCurrentElectionUseCase
    );
    const election = await findCurrentElectionUseCase.execute();

    return response.status(201).json(election);
  }
}

export default new FindCurrentElectionController();
