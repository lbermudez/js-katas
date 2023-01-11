export const paintLetterboxes = (start, end) => {
    const digits = Array(10).fill(0);
    for (let num = start; num <= end; num++)  {
        for (const d of String(num)) {
            digits[d] += 1;
        }
    }
    return digits;
}

function* gen(start, end) {
    for (let num = start; num <= end; num++) yield num;
};

export const paintLetterboxesG = (start, end) => {
    const digits = Array(10).fill(0);
    for (const num of gen(start, end)) {
        for (const d of String(num)) {
            digits[d]++;
        }
    }
    return digits;
};