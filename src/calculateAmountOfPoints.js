export const calculateAmountOfPoints = (games) => {
    return games.reduce((acc, curr) => {
        const [x, y] = curr.split(':');
        return acc + (x === y ? 1 : x < y ? 0 : 3);
    }, 0);
};

export const calculateAmountOfPointsWithMap = (games) => {
    return games
        .map((game) => game.split(':'))
        .map(([x, y]) => (x === y ? 1 : x < y ? 0 : 3))
        .reduce((acc, curr) => acc + curr, 0);
};
