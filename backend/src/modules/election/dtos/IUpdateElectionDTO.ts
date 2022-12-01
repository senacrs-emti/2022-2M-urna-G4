import { Elections } from '@prisma/client';

export interface IUpdateElectionDTO {
  id: number;
  data: {
    name?: Elections['name'];
    type?: Elections['type'];
    year?: Elections['year'];
  };
}
