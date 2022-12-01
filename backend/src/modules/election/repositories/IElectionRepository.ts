import { Elections } from '@prisma/client';
import { ICreateElectionDTO } from '../dtos/ICreateElectionDTO';

export interface IElectionRepository {
  create(data: ICreateElectionDTO): Promise<Elections | any>;
  update(electionId: number, data: Partial<Elections>): Promise<Elections>;
  findCurrentElection(): Promise<Elections | null>;
}
