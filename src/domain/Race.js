import { MissionUtils } from '@woowacourse/mission-utils';

const RANGE_MIN = 0;
const RANGE_MAX = 9;
const MOVE_THRESHOLD = 4;

export default class Race {
    #cars;
    #rng; // Random Number Generator

    constructor(cars, rng) {
        this.#cars = cars;
        this.#rng = () => MissionUtils.Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
        
        if (typeof rng === 'function') {
            this.#rng = rng;
        }
    }

    tickOnce() {
        for (let i = 0; i < this.#cars.length; i += 1) {
            this.#tryMoveCar(this.#cars[i]);
        }
        return this.#cars.map((car) => ({
            name: car.getName(),
            position: car.getPosition(),
        }));
    }

    #tryMoveCar(car) {
        const value = this.#rng();

        if (value >= MOVE_THRESHOLD) {
            car.move();
        }   
    }
}