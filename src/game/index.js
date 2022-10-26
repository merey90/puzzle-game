import { Tile } from '../tile';
import shuffle from 'lodash/shuffle';
import cloneDeep from 'lodash/cloneDeep';

import { GameWrapper } from './styles';
import { assetMapper, initialState } from './utils';

export const Game = () => {
  const gameTiles = shuffle(Object.keys(initialState));
  const gameState = cloneDeep(initialState);

  return (
    <GameWrapper>
      {gameTiles.map((tile) => (
        <Tile key={tile} asset={assetMapper[tile]} state={gameState[tile]} />
      ))}
    </GameWrapper>
  );
};
