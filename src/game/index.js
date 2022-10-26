import { useState } from 'react';
import shuffle from 'lodash/shuffle';
import cloneDeep from 'lodash/cloneDeep';

import { assetMapper, initialState } from './utils';
import { Tile } from '../tile';
import { GameWrapper } from './styles';

export const Game = ({ setAttempts }) => {
  const [gameTiles] = useState(shuffle(Object.keys(initialState)));
  const [gameState, setGameState] = useState(cloneDeep(initialState));
  const [opens, setOpens] = useState([]);

  const handleTileClick = (id) => {
    if (opens.length >= 2) return; // prevent more than 2 open tiles
    if (opens[0] === id) return; // prevent self click
    if (gameState[id].isFound) return; // prevent click on found tile

    setAttempts((prev) => ++prev);

    setOpens((prevOpens) => [...prevOpens, id]);

    if (opens[0] && gameState[opens[0]].name === gameState[id].name) {
      setGameState((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          isFound: true,
          isOpen: false,
        },
        [opens[0]]: {
          ...prevState[opens[0]],
          isFound: true,
          isOpen: false,
        },
      }));
      setOpens([]);
      return;
    }

    setGameState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isOpen: true,
      },
    }));

    if (opens.length >= 1)
      setTimeout(() => {
        closeAll();
      }, 2000);
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
