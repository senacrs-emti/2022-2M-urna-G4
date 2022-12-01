import { createContext, useState } from 'react';
import { NumericRoleToText, Role } from 'src/types/roles';
import Keyboard from './components/Keyboard';
import Screen from './components/Screen';
import {
  BackgroundContainer,
  BallotBoxContainer,
  BodyContainer,
} from './styles';

export const BallotBoxContext = createContext({} as any);

export default function Urna() {
  const [role, setRole] = useState<Role>('presidente');
  const [screen, setScreen] = useState<string>('voting');
  const [candidateNumber, setCandidateNumber] = useState<number[]>([]);
  const [candidateProps, setCandidateProps] = useState({} as any);
  const [votes, setVotes] = useState({} as any);

  const handleRoleChange = () => {
    const roleIndex = Object.values(NumericRoleToText).indexOf(role);
    const nextRoleIndex = roleIndex + 1;
    const newRole = Object.values(NumericRoleToText)[nextRoleIndex] as Role;
    if (newRole) {
      setRole(newRole);
      setCandidateNumber([]);
      setCandidateProps({});
      setVotes((prev: any) => {
        return { ...prev, [role]: candidateProps };
      });
    } else {
      console.log('cabou');
    }
  };

  return (
    <BodyContainer>
      <BackgroundContainer>
        <BallotBoxContainer>
          <BallotBoxContext.Provider
            value={{
              screen,
              setScreen,
              role,
              setRole,
              candidateNumber,
              setCandidateNumber,
              candidateProps,
              setCandidateProps,
              handleRoleChange,
            }}
          >
            <Screen />
            <Keyboard />
          </BallotBoxContext.Provider>
        </BallotBoxContainer>
      </BackgroundContainer>
    </BodyContainer>
  );
}
