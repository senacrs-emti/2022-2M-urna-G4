import { ICreateElectionDTO } from '@modules/election/dtos/ICreateElectionDTO';
import { IElectionRepository } from '@modules/election/repositories/IElectionRepository';
import { Elections } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';

export class ElectionRepositoryPrisma implements IElectionRepository {
  async create(data: ICreateElectionDTO): Promise<Elections> {
    const election = await prisma.elections.create({
      data: {
        name: data.name,
        type: data.type,
        year: data.year,
      },
    });

    return election;
  }

  async update(id: number, data: Partial<Elections>): Promise<Elections> {
    const election = await prisma.elections.update({
      where: {
        id: id,
      },
      data,
    });

    return election;
  }

  async findCurrentElection(): Promise<Elections | null> {
    const election = await prisma.elections.findFirst({
      where: {
        isActive: true,
      },
    });

    return election;
  }
}
