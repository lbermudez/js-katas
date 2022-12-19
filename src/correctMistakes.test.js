import { EXPECTED_STRING_TYPE } from './utils';
import { correctMistakes, correctMistakesWithRegex } from './correctMistakes';

describe('corretMistakes', () => {
    const cases = [
        [0, EXPECTED_STRING_TYPE],
        [null, EXPECTED_STRING_TYPE],
        [undefined, EXPECTED_STRING_TYPE],
        ['', ''],
        ['a', 'a'],
        ['5', 'S'],
        ['0', 'O'],
        ['1', 'I'],
        ['015', 'OIS'],
        ['a5b1c0d', 'aSbIcOd'],
        ['a5b1c0d5', 'aSbIcOdS'],
    ];

    describe('with for', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            try {
                expect(correctMistakes(inputString)).toBe(expected);
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });

    describe('with regex', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            try {
                expect(correctMistakesWithRegex(inputString)).toBe(expected);
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });
});
