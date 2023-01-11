export const mergeArrays = (arr1, arr2) => {
    const result = [];
    let e1, e2;
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        e1 = arr1[i];
        e2 = arr2[i];
        if (e1) result.push(e1);
        if (e2) result.push(e2);
    }
    return result;
};
