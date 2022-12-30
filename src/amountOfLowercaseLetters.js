export const amountOfLowercaseLetters = (inputString) => {
    const setLowercaseLetters = new Set([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'w',
        'y',
        'z',
    ]);

    return inputString
        .split('')
        .reduce(
            (acc, curr) => (setLowercaseLetters.has(curr) ? acc + 1 : acc),
            0
        );
};

export const amountOfLowercaseLettersWithSplitAndRegex = (inputString) =>
    inputString.split('').filter((char) => char.match(/[a-z]/)).length;

export const amountOfLowercaseLettersWithRegex = (inputString) =>
    inputString.match(/[a-z]/g)?.length ?? 0;
