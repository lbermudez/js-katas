export default function findUnique(array) {
    return array.find((e, i, arr) => {
        return i === 0
            ? e !== arr[1] && e !== arr[2]
            : e !== arr[i - 1] && e !== arr[i + 1];
    });
}
