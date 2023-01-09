export const splitInParts = (inputString, partLength) => {
    if (partLength < 1) return inputString;
    const result = [];
    let from = 0;
    let to = partLength;
    const times =
        Math.floor(inputString.length / partLength) +
        (inputString.length % partLength === 0 ? 0 : 1);
    for (let i = 0; i < times; i++) {
        result.push(inputString.slice(from, to));
        from += partLength;
        to += partLength;
    }
    return result.join(' ');
};

export const splitInPartsWithReduce = (inputString, partLength) => {
    const arr = inputString.split('').reduce((acc, cur, index) => {
        (index + 1) % partLength === 0 ? acc.push(cur + ' ') : acc.push(cur);
        return acc;
    }, []);
    return arr.join('').trimEnd();
};

export const splitInPartsWithForOf = (inputString, partLength) => {
    let result = '';
    let index = 0;
    for (const char of inputString) {
        result += char;
        if ((index + 1) % partLength === 0) result += ' ';
        index++;
    }
    return result.trimEnd();
};
