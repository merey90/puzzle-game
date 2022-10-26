import { PlayerWrapper, StyledPlayer, TileWrapper } from './styles';
import * as question from './question.json';

export const Tile = ({ asset, state, id, handleTileClick }) => {
  let mainClass = '';
  if (state.isOpen) mainClass += 'is-flipped';
  if (state.isFound) mainClass += 'is-found';

  return (
    <TileWrapper onClick={() => handleTileClick(id)} className={mainClass}>
      <PlayerWrapper className={'question'}>
        <StyledPlayer autoplay loop src={question} />
      </PlayerWrapper>
      <PlayerWrapper className={'answer'}>
        <StyledPlayer autoplay loop src={asset} />
      </PlayerWrapper>
    </TileWrapper>
  );
};
