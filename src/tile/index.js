import { useEffect, useState } from 'react';

import { PlayerWrapper, StyledPlayer, TileWrapper } from './styles';
import * as question from './question.json';

export const Tile = ({ asset, state, id, handleTileClick }) => {
  let mainClass = '';
  if (state.isOpen) mainClass += 'is-flipped';
  if (state.isFound) mainClass += 'is-found';

  const [controls, setControls] = useState();

  useEffect(() => {
    controls?.setSeeker(controls?.state?.instance?.totalFrames / 3);
    if (state.isFound) controls?.play();
    if (!state.isFound) controls?.pause();
  }, [state.isFound, controls, controls?.setSeeker]);

  return (
    <TileWrapper onClick={() => handleTileClick(id)} className={mainClass}>
      <PlayerWrapper className={'question'}>
        <StyledPlayer autoplay loop src={question} />
      </PlayerWrapper>
      <PlayerWrapper className={'answer'}>
        <StyledPlayer
          ref={(instance) => setControls(instance)}
          autoplay
          loop
          src={asset}
        />
      </PlayerWrapper>
    </TileWrapper>
  );
};
