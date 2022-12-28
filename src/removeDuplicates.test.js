import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
    const cases = [
        [
            [1, 1, 2],
            [1, 2],
        ],
        [
            [1, 2],
            [1, 2],
        ],
        [[], []]
    ];
    it.each(cases)('%s -> %s', (inputNumbers, expected) => {
        expect(removeDuplicates(inputNumbers)).toStrictEqual(expected);
    });
});
