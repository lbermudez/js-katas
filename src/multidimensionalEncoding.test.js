import { decode, encode } from './multidimensionalEncoding';

describe('multEncoding', function () {
    const encodeCases = [
        [[7n, 5n, 10n], [1n, 2n, 3n], 73n],
        [[9n, 9n], [8n, 8n], 80n],
        [[10n], [7n], 7n],
        [[10n], [0n], 0n],
        [[5n, 10n], [0n, 0n], 0n],
        [[5n, 10n], [0n, 7n], 7n],
        [[5n, 10n], [2n, 0n], 20n],
        [[7n, 5n, 10n], [0n, 0n, 0n], 0n],
        [[10n, 5n, 10n, 8n], [6n, 1n, 2n, 3n], 2499n],
        [[10n, 5n, 10n, 8n, 3n], [6n, 1n, 2n, 3n, 2n], 7499n],
        [[10n, 5n, 10n, 8n, 3n, 9n], [6n, 1n, 2n, 3n, 2n, 8n], 67499n],
        [[1n, 1n, 1n, 1n, 1n, 1n], [0n, 0n, 0n, 0n, 0n, 0n], 0n],
    ];
    const decodeCases = [
        [[10n], 0n, [0n]],
        [[10n], 7n, [7n]],
        [[5n, 10n], 0n, [0n, 0n]],
        [[5n, 10n], 7n, [0n, 7n]],
        [[5n, 10n], 20n, [2n, 0n]],
        [[9n, 9n], 80n, [8n, 8n]],
        [[7n, 5n, 10n], 0n, [0n, 0n, 0n]],
        [[7n, 5n, 10n], 73n, [1n, 2n, 3n]],
        [[10n, 5n, 10n, 8n], 2499n, [6n, 1n, 2n, 3n]],
        [[10n, 5n, 10n, 8n, 3n], 7499n, [6n, 1n, 2n, 3n, 2n]],
        [[10n, 5n, 10n, 8n, 3n, 9n], 67499n, [6n, 1n, 2n, 3n, 2n, 8n]],
        [[1n, 1n, 1n, 1n, 1n, 1n], 0n, [0n, 0n, 0n, 0n, 0n, 0n]],
    ];

    it.each(encodeCases)('%s - %s -> %s', (dimensions, point, expected) =>
        expect(encode(dimensions, point)).toBe(expected)
    );

    it.each(decodeCases)(
        '%s - %s -> %s',
        (dimensions, encodedPoint, expected) =>
            expect(decode(dimensions, encodedPoint)).toStrictEqual(expected)
    );
});
