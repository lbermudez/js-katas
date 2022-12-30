import {
    amountOfLowercaseLetters,
    amountOfLowercaseLettersWithRegex,
    amountOfLowercaseLettersWithSplitAndRegex,
} from './amountOfLowercaseLetters';

describe('amountOfLowercaseLetters', () => {
    const cases = [
        ['abDeC', 3],
        ['', 0],
        ['A', 0],
        ['AB', 0],
        ['ab', 2],
    ];
    describe('with Set structure', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(amountOfLowercaseLetters(inputString)).toBe(expected);
        });
    });

    describe('with Split and regex', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(amountOfLowercaseLettersWithSplitAndRegex(inputString)).toBe(
                expected
            );
        });
    });

    describe('with regex', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(amountOfLowercaseLettersWithRegex(inputString)).toBe(
                expected
            );
        });
    });
});
