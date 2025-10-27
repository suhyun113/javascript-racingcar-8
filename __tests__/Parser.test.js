import Parser from '../src/util/Parser.js';

describe('Parser 유틸 테스트', () => {
  // splitNames 테스트
  describe('splitNames', () => {
    test.each([
      { input: '  pobi  ,  woni ', expected: ['pobi', 'woni'] },
    ])(
      "splitNames('$input')는 $expected를 반환해야 한다.",
      ({ input, expected }) => {
        expect(Parser.splitNames(input)).toEqual(expected);
      },
    );
  });

  // toInteger 테스트
  describe('toInteger', () => {
    test.each([
      { input: 'abc' },
    ])("toInteger('$input')는 NaN을 반환해야 한다.", ({ input }) => {
      expect(Parser.toInteger(input)).toBeNaN();
    });
  });
});

