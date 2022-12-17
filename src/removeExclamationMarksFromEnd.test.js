import {
    removeExclamationMarksFromEndInmutable,
    removeExclamationMarksFromEndInmutableWithRegex,
    removeExclamationMarksFromEndMutable,
} from './removeExclamationMarksFromEnd';
import { EXPECTED_STRING_TYPE } from './utils';

describe('removeExclamationMarksFromEnd', () => {
    const cases = [
        ['a!', 'a'],
        ['ab!', 'ab'],
        ['a!!', 'a'],
        ['a!b!!', 'a!b'],
        ['a!b!', 'a!b'],
        ['a!!b!', 'a!!b'],
        ['a!!b!!', 'a!!b'],
        ['a!!b!', 'a!!b'],
        [null, EXPECTED_STRING_TYPE],
        [undefined, EXPECTED_STRING_TYPE],
        [0, EXPECTED_STRING_TYPE],
        ['a', 'a'],
        ['', ''],
    ];

    describe('mutable', () => {
        it.each([...cases])('%s must be %s', (inputString, expected) => {
            try {
                expect(removeExclamationMarksFromEndMutable(inputString)).toBe(
                    expected
                );
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });

    describe('inmutable', () => {
        it.each([...cases])('%s must be %s', (inputString, expected) => {
            try {
                const ref = inputString;
                expect(
                    removeExclamationMarksFromEndInmutable(inputString)
                ).toBe(expected);
                expect(ref).toStrictEqual(inputString);
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });

    describe('inmutable with regex', () => {
        it.each([...cases])('%s must be %s', (inputString, expected) => {
            try {
                const ref = inputString;
                expect(
                    removeExclamationMarksFromEndInmutableWithRegex(inputString)
                ).toBe(expected);
                expect(ref).toStrictEqual(inputString);
            } catch (e) {
                expect(e.message).toBe(expected);
            }
        });
    });
});
