export const toFreud = (inputString) =>
    typeof inputString !== 'string' || inputString.trim().length < 1
        ? ''
        : inputString
              .split(' ')
              .map(() => 'sex')
              .join(' ');

export const toFreudWithRegex = (inputString) =>
    typeof inputString !== 'string' || inputString.trim().length < 1
        ? ''
        : inputString.replace(/\S+/g, 'sex');
