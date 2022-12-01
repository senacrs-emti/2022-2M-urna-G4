import { IElectionRepository } from '@modules/election/repositories/IElectionRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindCurrentElectionUseCase {
  constructor(
    @inject('ElectionRepository')
    private electionRepository: IElectionRepository
  ) {}

  async execute() {
    const election = await this.electionRepository.findCurrentElection();
    return election;
  }
}
