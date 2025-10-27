import Car from '../src/domain/Car.js';

describe('Car 클래스 테스트', () => {
  let car;
  const CAR_NAME = 'testCar';

  beforeEach(() => {
    car = new Car(CAR_NAME);
  });

  test('constructor: new Car(name)로 생성 시 이름이 저장되고 위치는 0이다.', () => {
    // then
    expect(car.getName()).toBe(CAR_NAME);
    expect(car.getPosition()).toBe(0);
  });

  test('move: move() 메서드를 여러 번 호출하면 position이 누적된다.', () => {
    // when
    car.move();
    car.move();
    car.move();
    // then
    expect(car.getPosition()).toBe(3);
  });
});
