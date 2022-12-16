import {validateString} from "./utils";

export const countAmountOfEachCharacterByRegex = (characters) => {
    validateString(characters);
    const result = {};
    for (const char of characters) {
        if (!result[char])
            result[char] = characters.match(new RegExp(`${char}`, 'g')).length;
    }
    return result;
};

export const countAmountOfEachCharacterByForOf = (characters) => {
    validateString(characters);
    const result = {};
    for (const char of characters) {
        if (result[char]) result[char]++;
        else result[char] = 1;
    }
    return result;
};
