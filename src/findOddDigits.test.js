import {findOddDigits} from "./findOddDigits";

describe('findOddDigits', function () {
    const cases = [
        [1, 2, 0],
        [123456789111, 0, 0],
        [0, 5, 0],
        [2, 5, 0],
        [123456789111, 5, 13579],
        [123222, 5, 0],
    ];

    it.each(cases)('%s - %s -> %s', (num, numOfOdds, expected) => {
        expect(findOddDigits(num, numOfOdds)).toBe(expected);
    })
});