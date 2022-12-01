import styled from 'styled-components';

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.font.family.secondary};
`;

export const BallotBoxContainer = styled.div`
  width: 1000px;
  height: 500px;
  background: ${({ theme }) => theme.colors.ballotBoxBackground};
  padding: 30px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
`;
