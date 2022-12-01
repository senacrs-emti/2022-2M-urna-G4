import { Parties } from '@prisma/client';

export interface ICreatePartyDTO {
  name: Parties['name'];
  acronym: Parties['acronym'];
  number: Parties['number'];
}
