import { Elections } from '@prisma/client';
import { ICreateElectionDTO } from '../dtos/ICreateElectionDTO';

export interface IElectionRepository {
  create(data: ICreateElectionDTO): Promise<Elections | any>;
  update(id: number, data: Partial<Elections>): Promise<Elections>;
  findCurrentElection(): Promise<Elections | null>;
}
