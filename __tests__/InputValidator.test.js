import InputValidator from '../src/util/InputValidator.js';
import * as Messages from '../src/constants/ErrorMessages.js';

describe('InputValidator 유틸 테스트', () => {
  // validateNames 테스트
  describe('validateNames', () => {
    test.each([
      [['pobi', 'woni', 'jun']], 
    ])('유효한 이름 배열(%p)은 에러를 던지지 않는다.', (names) => {
      expect(() => InputValidator.validateNames(names)).not.toThrow();
    });

    const nameError = new Error(Messages.ERROR_INVALID_NAME);
    test.each([
      [['pobi', 'abcdef']],
    ])('유효하지 않은 이름 배열(%p)은 에러를 던진다.', (names) => {
      expect(() => InputValidator.validateNames(names)).toThrow(nameError);
    });
  });

  // validateTryCount 테스트
  describe('validateTryCount', () => {
    const countError = new Error(Messages.ERROR_INVALID_TRY_COUNT);
    test.each([
      [0],
    ])('유효하지 않은 시도 횟수(%p)는 에러를 던진다.', (count) => {
      expect(() => InputValidator.validateTryCount(count)).toThrow(countError);
    });
  });
});

