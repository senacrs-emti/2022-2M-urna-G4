import { IElectionRepository } from '@modules/election/repositories/IElectionRepository';
import { Elections } from '@prisma/client';
import { Request } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateElectionUseCase {
  constructor(
    @inject('ElectionRepository')
    private electionRepository: IElectionRepository
  ) {}

  async execute(electionId: number, data: Request['body']): Promise<Elections> {
    const election = await this.electionRepository.update(electionId, data);
    return election;
  }
}
