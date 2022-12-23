export const UNEXPECTED_VALUE = 'Unexpected value';
const validate = (name) => {
    if (
        !name ||
        typeof name !== 'string' ||
        !new RegExp('^\\w+\\s\\w+$', 'g').test(name)
    )
        throw new Error(UNEXPECTED_VALUE);
};

export const abbreviateName = (name) => {
    validate(name);
    return name
        .split(' ')
        .map((p) => p[0].toUpperCase())
        .join('.');
};

export const abbreviateNameWithRegex = (name) => {
    validate(name);
    return name
        .match(/^\w|(?<=\s)\w/g)
        .join('.')
        .toUpperCase();
};
