import { Parties } from '@prisma/client';
import { ICreatePartyDTO } from '../dtos/ICreatePartyDTO';

export interface IPartyRepository {
  create(data: ICreatePartyDTO): Promise<Parties>;
  update(id: number, data: Parties): Promise<Parties>;
  findAll(): Promise<Parties[]>;
}
