import styled from 'styled-components';

type KeyboardActionButtonProps = {
  variant: 'white' | 'correct' | 'confirm';
};

export const KeyboardContainer = styled.div`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.colors.ballotBoxKeyboard};

  padding: 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const KeyboardNumerics = styled.div`
  width: 100%;
`;

export const KeyboardNumeric = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;

  button {
    color: ${({ theme }) => theme.colors.lightText};
    background: ${({ theme }) => theme.colors.ballotBoxKeyboardButton};
    font-size: 20px;
    border-radius: 5px;

    width: 80px;
    height: 50px;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const KeyboardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const KeyboardActionButton = styled.button<KeyboardActionButtonProps>`
  background: ${({ theme, variant }) =>
    variant === 'white'
      ? theme.colors.ballotBoxWhiteButton
      : variant === 'correct'
      ? theme.colors.ballotBoxCorrectButton
      : theme.colors.ballotBoxConfirmButton};

  color: ${({ theme }) => theme.colors.darkText};
  font-size: 15px;
  border-radius: 5px;
  width: 30%;
  height: 50px;
`;
