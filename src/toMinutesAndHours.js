export const toMinutesAndHours = (num) => {
    let p;
    return `${~~(p = num / 3600)} hour(s) and ${~~((p % 1) * 60)} minute(s)`;
};
