import * as dog from './assets/dog.json';
import * as cat from './assets/cat.json';
import * as ball from './assets/ball.json';
import * as car from './assets/car.json';
import * as bus from './assets/bus.json';
import * as iceCream from './assets/ice-cream.json';
import * as tree from './assets/tree.json';
import * as bicycle from './assets/bicycle.json';

export const assetMapper = {
  ball1: ball,
  dog1: dog,
  cat1: cat,
  bus1: bus,
  iceCream1: iceCream,
  tree1: tree,
  bicycle1: bicycle,
  car1: car,
  ball2: ball,
  dog2: dog,
  cat2: cat,
  bus2: bus,
  iceCream2: iceCream,
  tree2: tree,
  bicycle2: bicycle,
  car2: car,
};

const tileInitialState = {
  isOpen: false,
  isFound: false,
};

export const initialState = {
  ball1: { ...tileInitialState, name: 'ball' },
  dog1: { ...tileInitialState, name: 'dog' },
  cat1: { ...tileInitialState, name: 'cat' },
  bus1: { ...tileInitialState, name: 'bus' },
  iceCream1: { ...tileInitialState, name: 'iceCream' },
  tree1: { ...tileInitialState, name: 'tree' },
  bicycle1: { ...tileInitialState, name: 'bicycle' },
  car1: { ...tileInitialState, name: 'car' },
  ball2: { ...tileInitialState, name: 'ball' },
  dog2: { ...tileInitialState, name: 'dog' },
  cat2: { ...tileInitialState, name: 'cat' },
  bus2: { ...tileInitialState, name: 'bus' },
  iceCream2: { ...tileInitialState, name: 'iceCream' },
  tree2: { ...tileInitialState, name: 'tree' },
  bicycle2: { ...tileInitialState, name: 'bicycle' },
  car2: { ...tileInitialState, name: 'car' },
};
