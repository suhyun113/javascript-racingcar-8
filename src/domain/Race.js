import MissionUtils from '@woowacourse/mission-utils';

const RANGE_MIN = 0;
const RANGE_MAX = 9;

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
}