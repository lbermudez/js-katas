export const findOddDigits = (num, numOfOdds) => {
    const sNum = String(num);
    if (numOfOdds > sNum.length) return 0;
    const sResult = sNum
        .split('')
        .filter((n) => Number(n) % 2 !== 0)
        .slice(0, numOfOdds)
        .join('');

    return sResult.length < numOfOdds ? 0 : Number(sResult);
};
