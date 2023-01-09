import {higherVersionWithRegex, higherVersionWithSplit} from './higherVersion';

describe('higherVersion', () => {
    const cases = [
        ['1.2.3', '1.02', true],
        ['1.2.3', '1.2.0', true],
        ['1.2.3', '1.02.0', true],
        ['1.2', '1.02', false],
        ['1.2', '1', true],
        ['1', '0.1', true],
        ['1', '1.0', false],
        ['1', '1.1', false],
        ['1', '0.0', true],
        ['1', '0.9', true],
        ['2', '02', false],
    ];

    it.each(cases)('With regex: %s - %s -> %s', (v1, v2, expected) => {
        expect(higherVersionWithRegex(v1, v2)).toBe(expected);
    });

    it.each(cases)('With split: %s - %s -> %s', (v1, v2, expected) => {
        expect(higherVersionWithSplit(v1, v2)).toBe(expected);
    });
});
