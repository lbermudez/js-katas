import {drawChessboard, drawChessboardG} from './drawChessboard';

describe('drawChessboard', () => {
    const cases = [
        [
            3,
            3,
            [
                ['O', 'X', 'O'],
                ['X', 'O', 'X'],
                ['O', 'X', 'O'],
            ],
        ],
        [
            2,
            2,
            [
                ['O', 'X'],
                ['X', 'O'],
            ],
        ],
        [1, 2, [['O', 'X']]],
        [1, 1, [['O']]],
    ];

    it.each(cases)('functional: %s - %s -> %s', (r, c, expected) =>
        expect(drawChessboard(r, c)).toStrictEqual(expected)
    );

    it.each(cases)('generators: %s - %s -> %s', (r, c, expected) =>
        expect(drawChessboardG(r, c)).toStrictEqual(expected)
    );
});
