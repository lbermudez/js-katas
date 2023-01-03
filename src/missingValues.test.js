import { missingValues } from './missingValues';

describe('missingValues', () => {
    const cases = [
        [[1, 1, 1, 2, 2, 3], 18],
        [[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], 4000000],
        [[6, 5], 0],
    ];
    it.each(cases)('%s -> %s', (arrayOfNums, expected) => {
        expect(missingValues(arrayOfNums)).toBe(expected);
    });
});
