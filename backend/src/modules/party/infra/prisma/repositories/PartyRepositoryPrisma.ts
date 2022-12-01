import { IPartyRepository } from '@modules/party/repositories/IPartyRepository';
import { Parties } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';

export class PartyRepositoryPrisma implements IPartyRepository {
  async create(data: Parties): Promise<Parties> {
    const party = await prisma.parties.create({
      data: {
        name: data.name,
        acronym: data.acronym,
        number: data.number,
      },
    });

    return party;
  }

  async update(id: number, data: Parties): Promise<Parties> {
    const party = await prisma.parties.update({
      where: {
        id: id,
      },
      data,
    });

    return party;
  }

  async findAll(): Promise<Parties[]> {
    const parties = await prisma.parties.findMany();

    return parties;
  }
}
