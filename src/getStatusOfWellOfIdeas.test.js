import { getStatusWellIdeas } from './getStatusOfWellOfIdeas';

describe('getStatusOfWellOfIdeas', () => {
    const cases = [
        [['bad', 'good', 'bad'], 'Publish!'],
        [['bad', 'bad'], 'Fail!'],
        [['bad', 'good', 'bad', 'good'], 'Publish!'],
        [['bad', 'good', 'bad', 'good', 'good'], 'I smell a series!'],
        [[], 'Fail!'],
    ];

    it.each(cases)('%s -> %s', (ideas, expected) => {
        expect(getStatusWellIdeas(ideas, expected)).toBe(expected);
    });
});
