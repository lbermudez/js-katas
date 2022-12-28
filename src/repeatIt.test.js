import {
    repeatIt,
    repeatItWithMapAndJoin,
    repeatItWithRepeat,
} from './repeatIt';

describe('repeatIt', () => {
    const cases = [
        [['Hi', 2], 'HiHi'],
        [['', 2], ''],
        [[1, 2], 'Not a string'],
    ];

    describe('with Array.reduce', () => {
        it.each(cases)('%s -> %s', (values, expected) => {
            expect(repeatIt(...values)).toBe(expected);
        });
    });

    describe('with String.map and join', () => {
        it.each(cases)('%s -> %s', (values, expected) => {
            expect(repeatItWithMapAndJoin(...values)).toBe(expected);
        });
    });

    describe('with String.repeat', () => {
        it.each(cases)('%s -> %s', (values, expected) => {
            expect(repeatItWithRepeat(...values)).toBe(expected);
        });
    });
});
