import OutputView from "../io/OutputView";
import Car from "../domain/Car.js";
import Race from "../domain/Race.js";

export default class GameService {
    static async play({ names, tryCount }) {
        const cars = names.map((name) => new Car(name));
        const race = new Race(cars);

        OutputView.printExecutionHeader();

        for (let i = 0; i < tryCount; i += 1) {
            const roundResult = race.tickOnce();
            OutputView.printRound(roundResult);
        }

        const winners = GameService.#computeWinners(cars);
        OutputView.printWinners(winners);
    }

    static #computeWinners(cars) {
        const maxPosition = GameService.#findMaxPosition(cars);
        const winners = GameService.#findWinners(cars, maxPosition);
        return winners;
    }

    // 최대 위치 찾기
    static #findMaxPosition(cars) {
        const positions = cars.map((car) => car.getPosition());
        return Math.max(...positions);
    }

    // 최대 위치와 일치하는 우승자 목록 반환
    static #findWinners(cars, maxPosition) {
        const winnerCars = cars.filter((car) => car.getPosition() === maxPosition);
        return winnerCars.map((car) => car.getName());
    }
}
