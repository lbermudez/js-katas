import { countSheep } from './countSheep';

describe('countSheep', () => {
    const cases = [
        [1, '1 sheep...'],
        [0, ''],
        [-1, ''],
    ];
    it.each(cases)('%s -> %s', (amount, expected) => {
        expect(countSheep(amount)).toBe(expected);
    });
});
