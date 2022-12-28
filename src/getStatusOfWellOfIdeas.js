export const getStatusWellIdeas = (ideas) => {
    const amount = ideas.filter((i) => i === 'good').length;
    return amount === 0
        ? 'Fail!'
        : amount > 2
        ? 'I smell a series!'
        : 'Publish!';
};
