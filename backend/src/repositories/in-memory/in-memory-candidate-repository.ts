import { Candidate } from '../../entities/candidates';
import { CandidatesRepository } from '../candidate-repository';

export class InMemoryCandidateRepository implements CandidatesRepository {
  public items: Candidate[] = [];

  async create(candidate: Candidate): Promise<void> {
    this.items.push(candidate);
  }

  async findOverlappingCandidate(id: number): Promise<Candidate | null> {
    const overlappingCandidate = this.items.find((candidate) => {
      return id == candidate.id;
    });

    if (!overlappingCandidate) return null;

    return overlappingCandidate;
  }
}
