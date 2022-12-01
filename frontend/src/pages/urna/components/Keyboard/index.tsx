import { BallotBoxContext } from '@pages/urna';
import { useContext } from 'react';
import { RoleVoteSlots } from 'src/types/roles';
import {
  KeyboardActionButton,
  KeyboardActions,
  KeyboardContainer,
  KeyboardNumeric,
  KeyboardNumerics,
} from './styles';

export default function Keyboard() {
  const { role, setCandidateNumber, setCandidateProps, handleRoleChange } =
    useContext(BallotBoxContext);

  const roleSlotsLength: number = RoleVoteSlots[role];
  const handleNumberClick = (number: number) => {
    setCandidateNumber((prev: number[]) => {
      if (prev.length >= roleSlotsLength) return [...prev];

      return [...prev, number];
    });
  };

  const handleActionButton = (action: string) => {
    switch (action) {
      case 'branco':
        // TODO
        break;

      case 'corrige':
        setCandidateNumber([]);
        setCandidateProps({});
        break;

      case 'confirma':
        // TODO
        handleRoleChange();
        break;
    }
  };

  return (
    <KeyboardContainer>
      <KeyboardNumerics>
        <KeyboardNumeric>
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
        </KeyboardNumeric>

        <KeyboardNumeric>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
        </KeyboardNumeric>

        <KeyboardNumeric>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
        </KeyboardNumeric>

        <KeyboardNumeric>
          <button onClick={() => handleNumberClick(Number('0'))}>0</button>
        </KeyboardNumeric>
      </KeyboardNumerics>

      <KeyboardActions>
        <KeyboardActionButton
          variant='white'
          onClick={() => handleActionButton('branco')}
        >
          BRANCO
        </KeyboardActionButton>
        <KeyboardActionButton
          variant='correct'
          onClick={() => handleActionButton('corrige')}
        >
          CORRIGE
        </KeyboardActionButton>
        <KeyboardActionButton
          variant='confirm'
          onClick={() => handleActionButton('confirma')}
        >
          CONFIRMA
        </KeyboardActionButton>
      </KeyboardActions>
    </KeyboardContainer>
  );
}
