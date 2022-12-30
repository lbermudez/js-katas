import { sortAndStar } from './sortAndStar';

describe('sortAndStar', () => {
    const cases = [
        [['We', 'solve', 'Katas'], 'K***a***t***a***s'],
        [['We'], 'W***e'],
        [[''], ''],
    ];

    it.each(cases)('%s -> %s', (strings, expected) => {
        expect(sortAndStar(strings)).toBe(expected);
    });
});
