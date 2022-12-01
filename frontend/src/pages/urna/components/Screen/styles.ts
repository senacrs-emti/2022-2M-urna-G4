import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 55%;
  height: 100%;

  background: ${({ theme }) => theme.colors.ballotBoxScreen};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.lightBorder};

  padding: 20px;

  color: ${({ theme }) => theme.colors.darkText};
`;

export const VotingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const VotingTexts = styled.div`
  flex: 1;

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }
`;

export const VotingNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const VotingNumber = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.darkBorder};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
`;

export const VoteDescription = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
`;

export const VotingImage = styled.div`
  img {
    width: 110px;
    height: 150px;
    border: 1px solid ${({ theme }) => theme.colors.darkBorder};
  }
`;

export const VotingInstructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.darkBorder};
  font-size: 14px;
  margin-top: 1rem;
  padding-top: 2rem;
`;
