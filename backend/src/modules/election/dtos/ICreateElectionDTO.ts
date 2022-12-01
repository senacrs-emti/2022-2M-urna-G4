import { Elections } from '@prisma/client';

export interface ICreateElectionDTO {
  name: Elections['name'];
  type: Elections['type'];
  year: Elections['year'];
}
