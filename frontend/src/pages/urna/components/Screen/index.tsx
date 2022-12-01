import { BallotBoxContext } from '@pages/urna';
import { useContext, useEffect } from 'react';
import { CandidatesMock } from 'src/mocks/urna';
import { Role, RoleToText, RoleVoteSlots } from 'src/types/roles';
import {
  ScreenContainer,
  VoteDescription,
  VotingContainer,
  VotingImage,
  VotingInstructions,
  VotingNumber,
  VotingNumbers,
  VotingTexts,
} from './styles';

export default function Screen() {
  const { screen, role, candidateNumber, candidateProps, setCandidateProps } =
    useContext(BallotBoxContext);

  const fetchCandidateByNumberAndRole = async (
    candidateNumber: number,
    role: Role
  ) => {
    CandidatesMock.forEach((candidate) => {
      if (candidate.number == candidateNumber && candidate.role == role) {
        setCandidateProps(candidate);
      }
    });
  };

  useEffect(() => {
    const candidateNumberInString: string = candidateNumber.join('');
    if (candidateNumberInString.length === RoleVoteSlots[role]) {
      fetchCandidateByNumberAndRole(Number(candidateNumberInString), role);
    }
  }, [candidateNumber]);

  const roleSlots = [];
  for (let i = 0; i < RoleVoteSlots[role]; i++) {
    roleSlots.push(
      String(candidateNumber[i]) == 'undefined' ? '' : candidateNumber[i]
    );
  }

  return (
    <ScreenContainer>
      {screen == 'voting' && (
        <VotingContainer>
          <VotingTexts>
            <p>Vote em um candidato</p>
            <h1>{RoleToText[role]}</h1>

            <VotingNumbers>
              <p>Números</p>
              {roleSlots.map((slot, index) => (
                <VotingNumber key={index}>{slot}</VotingNumber>
              ))}
            </VotingNumbers>

            <VoteDescription>
              Nome: <strong>{candidateProps.name || '_____'}</strong>
            </VoteDescription>

            <VoteDescription>
              Partido: <strong>{candidateProps.party || '_____'}</strong>
            </VoteDescription>
          </VotingTexts>

          <VotingImage>
            {candidateProps.image ? (
              <img src={candidateProps.image} alt='' />
            ) : (
              ''
            )}
          </VotingImage>

          <VotingInstructions>
            <p>Aperte a tecla:</p>
            <p>
              <b>BRANCO</b> para votar <b>EM BRANCO</b>
            </p>
            <p>
              <b>LARANJA</b> para <b>CORRIGIR</b>
            </p>
            <p>
              <b>VERDE</b> para <b>CONFIRMAR</b>
            </p>
          </VotingInstructions>
        </VotingContainer>
      )}
      {screen == 'end' && <h1>Fim</h1>}
    </ScreenContainer>
  );
}
