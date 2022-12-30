import { isPalindrome, isPalindromeWithCharAt } from './isPalindrome';

describe('isPalindrome', () => {
    const cases = [
        ['Abba', true],
        ['Abbá', false],
        ['racecar', true],
        ['a', false],
        ['', false],
    ];
    describe('with reverse', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(isPalindrome(inputString)).toBe(expected);
        });
    });

    describe('with loop and charAt', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(isPalindromeWithCharAt(inputString)).toBe(expected);
        });
    });
});
