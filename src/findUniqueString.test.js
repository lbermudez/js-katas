import findUniqueString from './findUniqueString';

describe('findUnique', function () {
    const cases = [
        [[ 'foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab' ], '   '],
        [[' ', 'foo bar', 'foobar'], ' '],
        [['foo bar', ' ', 'foobar'], ' '],
        [['f   oo   bar', 'foo bar', ' '], ' '],
        [['silvia', 'vasili', 'victor'], 'victor'],
        [['  ', 'a', 'a'], '  '],
        [['a', 'a ', '  '], '  '],
        [['a', '  ', 'a '], '  '],
        [[ '    ', 'a', ' ' ], 'a'],
        [
            ['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'],
            'Harry Potter',
        ],
        [['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'], 'BbBb'],
        [['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'], 'foo'],
    ];
    it.each(cases)('%s -> %s', (array, expected) =>
        expect(findUniqueString(array)).toBe(expected)
    );
});
