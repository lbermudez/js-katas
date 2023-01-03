import {positionInAlphabet} from "./positionInAlphabet";

describe('positionInAlphabet', () => {
    const cases = [
        ['a', 1],
        ['B', 2],
        ['', undefined],
        [1, undefined],
    ];

    it.each(cases)('%s -> %s', (char, expected) => {
        expect(positionInAlphabet(char)).toBe(expected);
    });
});
