import {
    splitOddAndEven,
    UNEXPECTED_NULL_OR_UNDEFINED, UNEXPECTED_TYPE,
} from './splitOddAndEven';

describe('splitOddAndEven', () => {
    const cases = [
        ['integers array', [0,1,2,3,4], { even: [0,2,4], odd: [1,3] }],
        ['integers array with one odd', [1], { even: [], odd: [1],  }],
        ['integers array with one even', [2], { even: [2], odd: [],  }],
        ['empty array', [], { odd: [], even: [] }],
        [UNEXPECTED_TYPE, [1.1],  UNEXPECTED_TYPE],
        [UNEXPECTED_TYPE, ['1'],  UNEXPECTED_TYPE],
        [UNEXPECTED_NULL_OR_UNDEFINED, undefined, UNEXPECTED_NULL_OR_UNDEFINED],
        [UNEXPECTED_NULL_OR_UNDEFINED, null, UNEXPECTED_NULL_OR_UNDEFINED],
    ];

    it.each(cases)('%s', (_, numbers, expected) => {
        try {
            const result = splitOddAndEven(numbers);
            expect(result).toStrictEqual(expected);
        } catch (error) {
            expect(error.message).toBe(expected);
        }
    });
});
