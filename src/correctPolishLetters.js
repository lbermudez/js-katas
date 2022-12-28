const charsMap = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
};

export const correctPolishLettersWithMap = (inputString) =>
    inputString
        .split('')
        .map((c) => {
            const correctC = charsMap[c];
            return correctC ? correctC : c;
        })
        .join('');

export const correctPolishLettersWithReplace = (inputString) =>
    inputString.replace(/ą|ć|ę|ł|ń|ó|ś|ź|ż/g, (c) => charsMap[c]);
