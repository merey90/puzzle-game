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
  open: false,
  found: false,
};

export const initialState = {
  ball1: { ...tileInitialState },
  dog1: { ...tileInitialState },
  cat1: { ...tileInitialState },
  bus1: { ...tileInitialState },
  iceCream1: { ...tileInitialState },
  tree1: { ...tileInitialState },
  bicycle1: { ...tileInitialState },
  car1: { ...tileInitialState },
  ball2: { ...tileInitialState },
  dog2: { ...tileInitialState },
  cat2: { ...tileInitialState },
  bus2: { ...tileInitialState },
  iceCream2: { ...tileInitialState },
  tree2: { ...tileInitialState },
  bicycle2: { ...tileInitialState },
  car2: { ...tileInitialState },
};
