import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePartyUseCase } from './CreatePartyUseCase';

class CreatePartyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, acronym, number } = request.body;
    if (!name || !acronym || !number) {
      return response.status(400).json({ error: 'Missing data' });
    }

    const createPartyUseCase = container.resolve(CreatePartyUseCase);
    const party = await createPartyUseCase.execute({
      name,
      acronym,
      number,
    });

    return response.status(201).json(party);
  }
}

export default new CreatePartyController();
