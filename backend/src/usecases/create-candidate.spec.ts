import { describe, expect, it } from 'vitest';
import { Candidate } from '../entities/candidates';
import { InMemoryCandidateRepository } from '../repositories/in-memory/in-memory-candidate-repository';
import { CreateCandidate } from './create-candidate';

describe('Create candidate', () => {
  it('should be able to create a candidate', () => {
    const candidateRepository = new InMemoryCandidateRepository();
    const createCandidate = new CreateCandidate(candidateRepository);

    expect(
      createCandidate.execute({
        id: 999,
        name: 'John',
        lastname: 'Doe',
        party: 'Johns Party',
        post: 'Deputado Federal',
      })
    ).resolves.toBeInstanceOf(Candidate);
  });

  it('should not be able to create a candidate with overlapping ids', async () => {
    const candidateRepository = new InMemoryCandidateRepository();
    const createCandidate = new CreateCandidate(candidateRepository);

    await createCandidate.execute({
      id: 999,
      name: 'John',
      lastname: 'Doe',
      party: 'Johns Party',
      post: 'Deputado Federal',
    });

    expect(
      createCandidate.execute({
        id: 999,
        name: 'John',
        lastname: 'Doe',
        party: 'Johns Party',
        post: 'Deputado Federal',
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
