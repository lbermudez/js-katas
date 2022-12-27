import {defineSuit} from "./defineSuit";

describe('defineSuit', () => {
    const cases = [
        ['3♣︎', 'clubs'],
        ['2♣︎', 'clubs'],
        ['3♠︎', 'spades'],
        ['3♦︎', 'diamonds'],
        ['3♥︎', 'hearts'],
        ['R♥︎', undefined],
        ['1♥︎', undefined],
        ['11♥︎', undefined],
    ];
    it.each(cases)('%s -> %s', (card, expected) => {
        expect(defineSuit(card)).toBe(expected);
    });
});