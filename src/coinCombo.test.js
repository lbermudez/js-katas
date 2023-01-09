import { coinCombo } from './coinCombo';

describe('coinCombo', () => {
    const cases = [
        [51, [1, 0, 0, 2]],
        [0, [0, 0, 0, 0]],
        [168, [3, 1, 1, 6]],
    ];

    it.each(cases)('%s -> %s', (cents, expected) => {
        expect(coinCombo(cents)).toStrictEqual(expected);
    });
});
