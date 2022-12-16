import {
    countAmountOfEachCharacterByForOf,
    countAmountOfEachCharacterByRegex,
} from './countAmountOfEachCharacter';
import { EXPECTED_STRING_TYPE } from './utils';

describe('countAmountOfEachCharacter', () => {
    const cases = [
        [EXPECTED_STRING_TYPE, undefined, EXPECTED_STRING_TYPE],
        [EXPECTED_STRING_TYPE, null, EXPECTED_STRING_TYPE],
        [EXPECTED_STRING_TYPE, 0, EXPECTED_STRING_TYPE],
        ['empty primitive string', '', {}],
        ['empty object string', new String(''), {}],
        ['one character', 'a', { a: 1 }],
        ['characters', 'aababbb', { a: 3, b: 4 }],
        ['object string', new String('aababbb'), { a: 3, b: 4 }],
    ];

    describe('based regex', () => {
        it.each(cases)('%s', (_, inputString, expected) => {
            try {
                expect(
                    countAmountOfEachCharacterByRegex(inputString)
                ).toStrictEqual(expected);
            } catch (error) {
                expect(error.message).toBe(expected);
            }
        });
    });

    describe('based for of', () => {
        it.each(cases)('%s', (_, inputString, expected) => {
            try {
                expect(
                    countAmountOfEachCharacterByForOf(inputString)
                ).toStrictEqual(expected);
            } catch (error) {
                expect(error.message).toBe(expected);
            }
        });
    });
});
