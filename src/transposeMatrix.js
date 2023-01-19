export function transpose(matrix) {
    const trans = Array(matrix[0].length);
    for (let i = 0; i < trans.length; i++) {
        trans[i] = Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
            trans[i][j] = matrix[j][i];
        }
    }
    return trans;
}
