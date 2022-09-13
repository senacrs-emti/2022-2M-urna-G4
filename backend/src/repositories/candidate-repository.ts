import { Candidate } from '../entities/candidates';

export interface CandidatesRepository {
  create(candidate: Candidate): Promise<void>;
  findOverlappingCandidate(id: number): Promise<Candidate | null>;
}
