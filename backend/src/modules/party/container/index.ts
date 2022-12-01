import { PartyRepositoryPrisma } from '@modules/party/infra/prisma/repositories/PartyRepositoryPrisma';
import { container } from 'tsyringe';
import { IPartyRepository } from '../repositories/IPartyRepository';

container.registerSingleton<IPartyRepository>(
  'PartyRepository',
  PartyRepositoryPrisma
);
