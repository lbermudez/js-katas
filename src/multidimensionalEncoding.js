export function encode(dimensions, point) {
    return point
        .map(
            (p, i) =>
                p * dimensions.slice(i + 1).reduce((acc, cur) => acc * cur, 1n)
        )
        .reduce((acc, cur) => acc + cur, 0n);
}

export function decode(dimensions, encodedPoint) {
    const division = reminderClosure(encodedPoint);
    return dimensions.map((_, i) =>
        division(dimensions.slice(i + 1).reduce((acc, cur) => acc * cur, 1n))
    );
}

function reminderClosure(dividend) {
    let reminder = dividend;
    return function (divisor) {
        const quotient = ~~reminder / divisor;
        reminder %= divisor;
        return quotient;
    };
}
