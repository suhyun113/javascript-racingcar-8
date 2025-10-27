import InputView from './io/InputView.js';
import Parser from './util/Parser';
import InputValidator from './util/InputValidator';
import GameService from './service/GameService.js';

class App {
  async run() {
    const rawNames = await InputView.readCarNames();
    const rawTryCount = await InputView.readTryCount();

    const names = Parser.splitNames(rawNames);
    const tryCount = Parser.toInteger(rawTryCount);

    InputValidator.validateNames(names);
    InputValidator.validateTryCount(tryCount);

    await GameService.play({ names, tryCount });
  }
}

export default App;
