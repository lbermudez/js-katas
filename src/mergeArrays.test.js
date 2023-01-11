import { mergeArrays } from './mergeArrays';

describe('mergeArrays', () => {
    const cases = [
        [[9, 10, 11], ['a'], [9, 'a', 10, 11]],
        [['a'], [9, 10, 11], ['a', 9, 10, 11]],
        [
            ['a', 'b'],
            [9, 10, 11],
            ['a', 9, 'b', 10, 11],
        ],
        [[], [], []],
    ];

    it.each(cases)('%s - %s -> %s', (arr1, arr2, expected) => {
        expect(mergeArrays(arr1, arr2)).toStrictEqual(expected);
    });
});
