const suitMap = {
    '♣︎': 'clubs',
    '♠︎': 'spades',
    '♦︎': 'diamonds',
    '♥︎': 'hearts',
};
export const defineSuit = (card) => {
    return suitMap[card.match(/(?<=[2-9]|10|J|Q|K|A)(♣︎|♠︎|♦︎|♥︎){1}/g)];
};
