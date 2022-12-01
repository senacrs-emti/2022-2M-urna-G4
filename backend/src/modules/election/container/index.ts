import { container } from 'tsyringe';
import { ElectionRepositoryPrisma } from '../infra/prisma/repositories/ElectionRepositoryPrisma';
import { IElectionRepository } from '../repositories/IElectionRepository';

container.registerSingleton<IElectionRepository>(
  'ElectionRepository',
  ElectionRepositoryPrisma
);
