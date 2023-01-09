export const coinCombo = (cents) => {
    const result = Array(4);
    [1, 5, 10, 25].reduceRight((acc, curr, index) => {
        result[index] = Math.floor(acc / curr);
        return acc % curr;
    }, cents);
    return result;
};
