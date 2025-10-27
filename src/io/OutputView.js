import {MissionUtils} from '@woowacourse/mission-utils'

export default class OutputView {
    static printExecutionHeader() {
        MissionUtils.Console.print('\n실행 결과');
    }

    static printRound(roundResult) {
        for (let i = 0; i < roundResult.length; i += 1) {
            const { name, position } = roundResult[i];
            const dashes = '-'.repeat(position);
            MissionUtils.Console.print(`${name} : ${dashes}`);
        }
        MissionUtils.Console.print('');
    }

    static printWinners(winners) {
        MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}