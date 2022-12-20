import {
    calculateAmountOfPoints,
    calculateAmountOfPointsWithMap
} from './calculateAmountOfPoints';

describe('calculateAmountOfPoints', () => {
    const cases = [
        [['0:0'], 1],
        [['0:1'], 0],
        [['1:0'], 3],
        [['0:0', '0:1'], 1],
        [['0:0', '1:0'], 4],
        [[], 0],
    ];

    describe('reduce', () => {
        it.each(cases)('%s -> %s', (games, expected) => {
            try {
                expect(calculateAmountOfPoints(games)).toBe(expected);
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });

    describe('map and reduce', () => {
        it.each(cases)('%s -> %s', (games, expected) => {
            try {
                expect(calculateAmountOfPointsWithMap(games)).toBe(expected);
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });
});
