import {MissionUtils} from '@woowacourse/mission-utils';

export default class InputView {
    static readCarNames() {
        const prompt = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
        return MissionUtils.Console.readLineAsync(prompt);
    }

    static readTryCount() {
        const prompt = '시도할 회수는 몇 회인가요?\n';
        return MissionUtils.Console.readLineAsync(prompt);
    }
}