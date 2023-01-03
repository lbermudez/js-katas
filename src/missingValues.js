const byReps = (map, reps) => {
    const result = {x: 0, y: 0}
    const entries = Object.entries(map);
    let end = false;
    for (let i = 0; i < entries.length && !end; i++) {
        const [key, value] = entries[i];
        if (value === reps.x) result.x = key;
        if (value === reps.y) result.y = key;
        end = result.x && result.y;
    }
    return result;
}
export const missingValues = (arr) => {
    const repMap = {};
    for (let i = 0; i < arr.length; i++) {
        repMap[arr[i]] = (repMap[arr[i]] || 0) + 1;
    }

    const {x, y} = byReps(repMap, {x: 1, y: 2})
    return x * x * y;
};
