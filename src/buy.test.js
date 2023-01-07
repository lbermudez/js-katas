import {buyWithPairsClass, buyWithPairsGenerator} from './buy';

describe('buy', () => {
    const cases = [
        [5, [5, 4, 5, 2, 2], [3, 4]],
        [5, [2, 3, 3, 4, 5], [0, 1]],
        [5, [5, 2, 3, 4, 5], [1, 2]],
        [5, [5, 2, 4, 3, 5], [1, 3]],
        [5, [5, 4, 5, 2, 3], [3, 4]],
    ];

    describe('With class Pairs', () => {
        it.each(cases)('%s - %s -> %s', (credit, prices, expected) => {
            expect(buyWithPairsClass(credit, prices)).toStrictEqual(expected);
        });
    });

    describe('With generator', () => {
        it.each(cases)('%s - %s -> %s', (credit, prices, expected) => {
            expect(buyWithPairsGenerator(credit, prices)).toStrictEqual(
                expected
            );
        });
    });

});
