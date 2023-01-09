import {
    splitInParts,
    splitInPartsWithForOf,
    splitInPartsWithReduce,
} from './splitInParts';

describe('splitInParts', () => {
    const cases = [
        ['HelloDev', 1, 'H e l l o D e v'],
        ['HelloDev', 3, 'Hel loD ev'],
        ['HelloDev', 9, 'HelloDev'],
        ['HelloDev', 0, 'HelloDev'],
    ];

    it.each(cases)(
        'With Loop: %s - %s -> %s',
        (inputString, partLength, expected) => {
            expect(splitInParts(inputString, partLength)).toBe(expected);
        }
    );

    it.each(cases)(
        'With reduce: %s - %s -> %s',
        (inputString, partLength, expected) => {
            expect(splitInPartsWithReduce(inputString, partLength)).toBe(
                expected
            );
        }
    );

    it.each(cases)(
        'With map: %s - %s -> %s',
        (inputString, partLength, expected) => {
            expect(splitInPartsWithForOf(inputString, partLength)).toBe(
                expected
            );
        }
    );
});
