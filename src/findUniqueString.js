let map = {};

export default function findUniqueString(array) {
    return array.find((e, i, arr) => {
        map = {};
        return i === 0
            ? !eq(arr, 0, 1) && !eq(arr, 0, 2)
            : i < arr.length - 1
            ? !eq(arr, i, i - 1) && !eq(arr, i, i + 1)
            : !eq(arr, i, i - 1) && !eq(arr, i, i - 2);
    });
}

function eq(arr, i, j) {
    if (!map[i]) map[i] = uniqueSortChars(arr[i].toUpperCase()).trimStart();
    if (!map[j]) map[j] = uniqueSortChars(arr[j].toUpperCase()).trimStart();
    let [minor, major] = order(map[i], map[j]);

    return major.length > 0 && minor.length === 0
        ? false
        : major.startsWith(minor);
}

const order = (arrA, arrB) =>
    arrA.length < arrB.length ? [arrA, arrB] : [arrB, arrA];

const uniqueSortChars = (st) => [...new Set(st)].sort().join('');
