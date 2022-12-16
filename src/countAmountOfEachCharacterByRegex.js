export const UNEXPECTED_TYPE = 'it must be a string';

function validate(characters) {
    if (typeof characters !== 'string') throw new Error(UNEXPECTED_TYPE);
}

export const countAmountOfEachCharacterByRegex = (characters) => {
    validate(characters);
    const result = {};
    for (const char of characters) {
        if (!result[char])
            result[char] = characters.match(new RegExp(`${char}`, 'g')).length;
    }
    return result;
};

export const countAmountOfEachCharacterByForOf = (characters) => {
    validate(characters);
    const result = {};
    for (const char of characters) {
        if (result[char]) result[char]++;
        else result[char] = 1;
    }
    return result;
};
