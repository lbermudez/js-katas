export const EXPECTED_STRING_TYPE = 'it must be a string';

export function validateString(inputString) {
    if (typeof inputString !== 'string' && !(inputString instanceof String))
        throw new Error(EXPECTED_STRING_TYPE);
}