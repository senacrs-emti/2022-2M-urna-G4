import { IUpdateElectionDTO } from '@modules/election/dtos/IUpdateElectionDTO';
import { IElectionRepository } from '@modules/election/repositories/IElectionRepository';
import { Elections } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateElectionUseCase {
  constructor(
    @inject('ElectionRepository')
    private electionRepository: IElectionRepository
  ) {}

  async execute({ id, data }: IUpdateElectionDTO): Promise<Elections> {
    const election = await this.electionRepository.update(id, data);
    return election;
  }
}
