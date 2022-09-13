import { Candidate } from '../entities/candidates';
import { CandidatesRepository } from '../repositories/candidate-repository';

interface CreateCandidateRequest {
  id: number;
  name: string;
  lastname: string;
  party: string;
  post: string;
}

type CreateCandidateResponse = Candidate;

export class CreateCandidate {
  constructor(private candidateRepository: CandidatesRepository) {}

  async execute({
    id,
    name,
    lastname,
    party,
    post,
  }: CreateCandidateRequest): Promise<CreateCandidateResponse> {
    const overlappingCandidate =
      await this.candidateRepository.findOverlappingCandidate(id);

    if (overlappingCandidate)
      throw new Error('Candidate id cannot be duplicated');

    const candidate = new Candidate({
      id,
      name,
      lastname,
      party,
      post,
    });

    await this.candidateRepository.create(candidate);

    return candidate;
  }
}
