import { Tile } from '../tile';
import { GameWrapper } from './styles';
import * as dog from './assets/dog.json';
import * as cat from './assets/cat.json';
import * as ball from './assets/ball.json';
import * as car from './assets/car.json';
import * as bus from './assets/bus.json';
import * as iceCream from './assets/ice-cream.json';
import * as tree from './assets/tree.json';
import * as bicycle from './assets/bicycle.json';

export const Game = () => {
  return (
    <GameWrapper>
      <Tile asset={dog} />
      <Tile asset={cat} />
      <Tile asset={ball} />
      <Tile asset={car} />
      <Tile asset={bus} />
      <Tile asset={iceCream} />
      <Tile asset={tree} />
      <Tile asset={bicycle} />
    </GameWrapper>
  );
};
