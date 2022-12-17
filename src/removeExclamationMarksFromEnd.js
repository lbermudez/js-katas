import {validateString} from "./utils";

export function removeExclamationMarksFromEndMutable(inputString) {
    validateString(inputString);
    let i = inputString.length - 1;
    for (; inputString[i] === '!'; i--);
    inputString = inputString.substring(0, i + 1)
    return inputString;
}

export function removeExclamationMarksFromEndInmutable(inputString) {
    validateString(inputString);
    let i = inputString.length - 1;
    for (; inputString[i] === '!'; i--);
    return inputString.substring(0, i + 1);
}

export function removeExclamationMarksFromEndInmutableWithRegex(inputString) {
    validateString(inputString);
    return inputString.replace(/!+$/, "");
}

