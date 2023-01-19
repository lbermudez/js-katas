import {transpose} from './transposeMatrix';

describe('transposeMatrix', () => {
    const cases = [
        [[[1]], [[1]]],
        [
            [
                [1, 2, 3],
                [4, 5, 6],
            ],
            [
                [1, 4],
                [2, 5],
                [3, 6],
            ],
        ],
    ];
    it.each(cases)('%s -> %s', (matrix, transponse) => {
        expect(transpose(matrix)).toStrictEqual(transponse);
    });
});
