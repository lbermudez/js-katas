import {
    correctPolishLettersWithMap,
    correctPolishLettersWithReplace
} from "./correctPolishLetters";

describe('correctPolishLetters', () => {
    const cases = [
        ['Wół', 'Wol'],
        ['Wóół', 'Wool'],
        ['', '']
    ]

    describe('with Array.map', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(correctPolishLettersWithMap(inputString)).toBe(expected)
        })
    })

    describe('with String.replace and regex', () => {
        it.each(cases)('%s -> %s', (inputString, expected) => {
            expect(correctPolishLettersWithReplace(inputString)).toBe(expected)
        })
    })

})