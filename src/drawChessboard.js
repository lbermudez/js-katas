export const drawChessboard = (r, c) =>
    [...Array(r)].map((_, i) =>
        [...Array(c)].map((_, j) => ['O', 'X'][(i + j) % 2])
    );

export const drawChessboardG = (r, c) => [
    ...(function* () {
        for (let i = 0; i < r; i++)
            yield [
                ...(function* () {
                    for (let j = 0; j < c; j++)
                        yield ['O', 'X'][(i + j) % 2];
                })(),
            ];
    })(),
];
