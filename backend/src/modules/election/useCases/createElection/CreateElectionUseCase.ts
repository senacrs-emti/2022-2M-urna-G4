import { ICreateElectionDTO } from '@modules/election/dtos/ICreateElectionDTO';
import { IElectionRepository } from '@modules/election/repositories/IElectionRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateElectionUseCase {
  constructor(
    @inject('ElectionRepository')
    private electionRepository: IElectionRepository
  ) {}

  async execute({ name, type, year }: ICreateElectionDTO) {
    const election = await this.electionRepository.findCurrentElection();
    if (election) return { error: 'There is already an election in progress' };

    const data: ICreateElectionDTO = {
      name,
      type,
      year,
    };

    return await this.electionRepository.create(data);
  }
}
