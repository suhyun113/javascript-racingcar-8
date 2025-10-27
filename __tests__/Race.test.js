import Race from '../src/domain/Race.js';
import Car from '../src/domain/Car.js';

describe('Race 클래스 테스트', () => {
  let cars;

  beforeEach(() => {
    cars = [new Car('pobi'), new Car('woni'), new Car('jun')];
  });

  test('tickOnce: RNG가 모두 4 이상이면 모든 차가 전진한다.', () => {
    // given
    const alwaysMoveRNG = () => 5;
    const race = new Race(cars, alwaysMoveRNG);

    // when
    race.tickOnce();

    // then
    cars.forEach((car) => {
      expect(car.getPosition()).toBe(1);
    });
  });

  test('tickOnce: RNG가 모두 4 미만이면 모든 차가 멈춘다.', () => {
    // given
    const alwaysStopRNG = () => 3;
    const race = new Race(cars, alwaysStopRNG);

    // when
    race.tickOnce();

    // then
    cars.forEach((car) => {
      expect(car.getPosition()).toBe(0);
    });
  });
});

