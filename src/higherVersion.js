export const higherVersionWithRegex = (versionX, versionY) => {
    const regex = new RegExp('d+(?=\\.)|(?<=\\.)\\d+|\\d+', 'g');
    const [digitsX, digitsY] = toDigits(
        versionX.match(regex),
        versionY.match(regex)
    );

    return higher(digitsX, digitsY);
};

export const higherVersionWithSplit = (versionX, versionY) => {
    const [digitsX, digitsY] = toDigits(
        versionX.split('.'),
        versionY.split('.')
    );

    return higher(digitsX, digitsY);
};

function toDigits(charsX, charsY) {
    return charsX && charsY
        ? [toDigits(charsX), toDigits(charsY)]
        : fillWithZeros(charsX, 3).map((c) => Number(c));
}

function fillWithZeros(digits, length) {
    if (digits.length === length) return digits;
    return digits.concat(Array(length).fill('0')).slice(0, 3);
}

function higher(digitsX, digitsY) {
    let found = -1;
    for (let i = 0; i < 3 && found < 0; i++) {
        found =
            digitsX[i] > digitsY[i] ? 0 : digitsY[i] > digitsX[i] ? 1 : found;
    }

    return found === 0;
}
