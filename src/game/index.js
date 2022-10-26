import { useState } from 'react';
import shuffle from 'lodash/shuffle';
import cloneDeep from 'lodash/cloneDeep';

import { assetMapper, initialState } from './utils';
import { Tile } from '../tile';
import { GameWrapper } from './styles';

export const Game = () => {
  const [gameTiles, setGameTiles] = useState(
    shuffle(Object.keys(initialState))
  );
  const [gameState, setGameState] = useState(cloneDeep(initialState));
  const [opens, setOpens] = useState([]);

  const handleTileClick = (id) => {
    if (opens.length >= 2) return;
    console.log('opens1: ', opens);

    setOpens((prevOpens) => [...prevOpens, id]);
    const tile = gameState[id];

    console.log('opens2: ', opens);

    let found = false;

    if (opens[0] && opens[0].name === tile.name) {
      found = true;
    }

    if (!found)
      setGameState((prevState) => ({
        ...prevState,
        [id]: {
          ...tile,
          isOpen: !tile.isOpen,
        },
      }));

    if (opens.length >= 1 && !found)
      setTimeout(() => {
        closeAll();
      }, 2000);
    if (found) {
      setOpens([]);
    }
  };

  const closeAll = () => {
    setGameState((prevState) => {
      const newState = {};

      Object.keys(prevState).forEach((key) => {
        newState[key] = {
          ...prevState[key],
          isOpen: false,
        };
      });
      setOpens([]);

      return newState;
    });
  };

  return (
    <GameWrapper>
      {gameTiles.map((tile) => (
        <Tile
          key={tile}
          id={tile}
          handleTileClick={handleTileClick}
          asset={assetMapper[tile]}
          state={gameState[tile]}
        />
      ))}
    </GameWrapper>
  );
};
