export const everyPossibleSum = (num) => {
    const numbers = [...String(num)].map((n) => Number(n));
    const result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    return result;
};
