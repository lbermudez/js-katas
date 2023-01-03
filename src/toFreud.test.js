import {toFreud, toFreudWithRegex} from './toFreud';

describe('toFreud', () => {
    const cases = [
        ['Sigmund Freud', 'sex sex'],
        ['', ''],
        [undefined, ''],
    ];
    it.each(cases)('With map: %s -> %s', (inputString, expected) => {
        expect(toFreud(inputString)).toBe(expected);
    });
    it.each(cases)('With replace and regex: %s -> %s', (inputString, expected) => {
        expect(toFreudWithRegex(inputString)).toBe(expected);
    });
});
