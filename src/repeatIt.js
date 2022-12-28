export const repeatIt = (inputString, number) => {
    if (typeof inputString !== 'string') return 'Not a string';
    return [...Array(number)].reduce((acc) => acc + inputString, '');
};

export const repeatItWithMapAndJoin = (inputString, number) => {
    if (typeof inputString !== 'string') return 'Not a string';
    return [...Array(number)].map(() => inputString).join('');
};

export const repeatItWithRepeat = (inputString, number) => {
    if (typeof inputString !== 'string') return 'Not a string';
    return inputString.repeat(number);
};
