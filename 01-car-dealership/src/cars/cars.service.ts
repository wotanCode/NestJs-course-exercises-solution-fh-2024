import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'BMW',
    //   model: 'Special',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const cars = this.cars.find((car) => car.id === id);

    if (!cars) {
      throw new NotFoundException(`Car with id: ${id} not found`);
    }

    return cars;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadGatewayException(`Car with id ${id} not valid inside body`);
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });
    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    if (car.id !== id)
      throw new BadGatewayException(`Car with id ${id} dont exist`);

    this.cars = this.cars.filter((car) => car.id !== id);

    return {
      method: 'delete',
      id,
    };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
