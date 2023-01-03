import { everyPossibleSum } from './everyPossibleSum';

describe('everyPossibleSum', () => {
    const cases = [
        [1234, [3, 4, 5, 5, 6, 7]],
        [1, []],
        [12, [3]],
    ];

    it.each(cases)('%s -> %s', (num, expected) => {
        expect(everyPossibleSum(num)).toStrictEqual(expected);
    });
});
