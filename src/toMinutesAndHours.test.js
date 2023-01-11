import { toMinutesAndHours } from './toMinutesAndHours';

describe('toMinutesAndHours', () => {
    const cases = [
        [3601, '1 hour(s) and 0 minute(s)'],
        [3663, '1 hour(s) and 1 minute(s)'],
        [3600, '1 hour(s) and 0 minute(s)'],
        [59, '0 hour(s) and 0 minute(s)'],
    ];

    it.each(cases)('%s -> %s', (num, expected) =>
        expect(toMinutesAndHours(num)).toBe(expected)
    );
});
