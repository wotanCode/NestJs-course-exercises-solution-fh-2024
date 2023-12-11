import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interfaces';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'Special',
  },
  {
    id: uuid(),
    brand: 'ferrari',
    model: 'xd2',
  },
];
