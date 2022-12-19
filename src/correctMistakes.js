import { validateString } from './utils';

const corrections = { 0: 'O', 5: 'S', 1: 'I' };
export const correctMistakes = (inputString) => {
    validateString(inputString);
    const arrayOfChars = Array.from(inputString);
    return arrayOfChars.map((c) => {
        const foundChar = corrections[c];
        return foundChar ? foundChar : c;
    }).join('');
};

// More inefficient: O(3n)
export const correctMistakesWithRegex = (inputString) => {
    validateString(inputString);
    return inputString.replace(/[501]/g, (c) => corrections[c]);
};
