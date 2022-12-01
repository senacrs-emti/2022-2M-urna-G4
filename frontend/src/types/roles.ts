export type Role =
  | 'presidente'
  | 'governador'
  | 'senador'
  | 'deputado_federal'
  | 'deputado_estadual';

export const RoleVoteSlots: any = {
  presidente: 2,
  governador: 2,
  senador: 3,
  deputado_federal: 4,
  deputado_estadual: 5,
};

export const RoleToText: any = {
  presidente: 'Presidente',
  governador: 'Governador',
  senador: 'Senador',
  deputado_federal: 'Deputado Federal',
  deputado_estadual: 'Deputado Estadual',
};

export const NumericRoleToText: any = {
  1: 'presidente',
  2: 'governador',
  3: 'senador',
  4: 'deputado_federal',
  5: 'deputado_estadual',
};
