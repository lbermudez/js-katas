import {
    countAmountOfEachCharacterByForOf,
    countAmountOfEachCharacterByRegex,
    UNEXPECTED_TYPE,
} from './countAmountOfEachCharacterByRegex';

describe('countAmountOfEachCharacter', () => {
    const cases = [
        [UNEXPECTED_TYPE, undefined, UNEXPECTED_TYPE],
        [UNEXPECTED_TYPE, null, UNEXPECTED_TYPE],
        [UNEXPECTED_TYPE, 0, UNEXPECTED_TYPE],
        ['empty primitive string', '', {}],
        ['empty object string', '', {}],
        ['one character', 'a', { a: 1 }],
        ['characters', 'aababbb', { a: 3, b: 4 }],
    ];

    describe('based regex', () => {
        it.each(cases)('%s', (_, characters, expected) => {
            try {
                expect(
                    countAmountOfEachCharacterByRegex(characters)
                ).toStrictEqual(expected);
            } catch (error) {
                expect(error.message).toBe(expected);
            }
        });
    });

    describe('based for of', () => {
        it.each(cases)('%s', (_, characters, expected) => {
            try {
                expect(
                    countAmountOfEachCharacterByForOf(characters)
                ).toStrictEqual(expected);
            } catch (error) {
                expect(error.message).toBe(expected);
            }
        });
    });
});
