export const UNEXPECTED_NULL_OR_UNDEFINED =
    'unexpected null or undefined value';
export const UNEXPECTED_TYPE = 'it is not integer number';

function validate(numbers) {
    if (!numbers) throw new Error(UNEXPECTED_NULL_OR_UNDEFINED);
}

export const splitOddAndEven = (numbers) => {
    validate(numbers);
    const odd = [];
    const even = [];

    for (const number of numbers) {
        if (!Number.isInteger(number)) throw new Error(UNEXPECTED_TYPE);
        number % 2 === 0 ? odd.push(number) : even.push(number);
    }

    return { odd, even };
};
