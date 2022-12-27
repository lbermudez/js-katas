export const divisibleBy = (values, divisor) => {
    return values.filter((v) => v % divisor === 0);
}