import findUnique from './findUnique';

describe('findUnique', function () {
    const cases = [
        [[0, 0, 1,], 1],
        [[0, 1, 0], 1],
        [[0, 1, 1], 0],
        [[1, 0, 0,], 1],
        [[1, 0, 1,], 0],
        [[0, 0, 0, 1, 0, 0], 1],
        [[0, 1, 1, 1, 1, 1], 0],
        [[1, 1, 1, 1, 0.55, 1, 1], 0.55],
    ];
    it.each(cases)('%s -> %s', (array, expected) =>
        expect(findUnique(array)).toBe(expected)
    );
});
