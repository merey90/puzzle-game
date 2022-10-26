import { useState } from 'react';
import { Game } from './game';

import { StyledApp, StyledHeader } from './styles';

function App() {
  const [attempts, setAttempts] = useState(0);

  return (
    <StyledApp>
      <StyledHeader>Alan balapan: {attempts}</StyledHeader>
      <Game setAttempts={setAttempts} />
    </StyledApp>
  );
}

export default App;
