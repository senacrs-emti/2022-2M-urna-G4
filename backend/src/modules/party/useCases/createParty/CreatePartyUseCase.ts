import { ICreatePartyDTO } from '@modules/party/dtos/ICreatePartyDTO';
import { IPartyRepository } from '@modules/party/repositories/IPartyRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreatePartyUseCase {
  constructor(
    @inject('PartyRepository')
    private partyRepository: IPartyRepository
  ) {}

  async execute({ name, acronym, number }: ICreatePartyDTO) {
    const data: ICreatePartyDTO = {
      name,
      acronym,
      number,
    };

    return await this.partyRepository.create(data);
  }
}
