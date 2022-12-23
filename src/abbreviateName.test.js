import {
    abbreviateName,
    abbreviateNameWithRegex,
    UNEXPECTED_VALUE,
} from './abbreviateName';

describe('abbreviateName', () => {
    const cases = [
        ['Luis Bermudez', 'L.B'],
        ['luis bermudez', 'L.B'],
        ['', UNEXPECTED_VALUE],
        [null, UNEXPECTED_VALUE],
        [undefined, UNEXPECTED_VALUE],
        [0, UNEXPECTED_VALUE],
        [' j', UNEXPECTED_VALUE],
        ['j ', UNEXPECTED_VALUE],
    ];

    describe('split and slice', () => {
        it.each(cases)('%s -> %s', (name, expected) => {
            try {
                expect(abbreviateName(name)).toBe(expected);
            } catch (e) {
                expect(e.message).toBe(UNEXPECTED_VALUE);
            }
        });
    });

    describe('regex', () => {
        it.each(cases)('%s -> %s', (name, expected) => {
            try {
                expect(abbreviateNameWithRegex(name)).toBe(expected);
            } catch (e) {
                expect(e.message).toBe(UNEXPECTED_VALUE);
            }
        });
    });
});
