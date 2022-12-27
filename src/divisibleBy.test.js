import {divisibleBy} from "./divisibleBy";

describe('divisibleBy', () => {
    const cases = [
        [[1, 2, 3, 4, 5, 6], 2, [2, 4, 6]],
        [[1, 2, 3, 4, 5, 6], 0, []],
        [[1, 2, 3, 4, 5, 6], -1, [1, 2, 3, 4, 5, 6]],
    ];
    it.each(cases)('%s -> %s', (values, divisor, expected) => {
        expect(divisibleBy(values, divisor)).toStrictEqual(expected);
    });
});
