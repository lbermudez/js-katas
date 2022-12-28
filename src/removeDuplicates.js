export const removeDuplicates = (inputNumbers) => {
    const duplicatedMap = {};
    return inputNumbers.filter((n) => {
        const exists = duplicatedMap[n];
        if (!exists) duplicatedMap[n] = true;
        return !exists;
    });
}