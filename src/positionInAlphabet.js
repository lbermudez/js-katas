export const positionInAlphabet = (char) =>
    typeof char !== 'string' || char.length !== 1
        ? undefined
        : 'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase()) + 1;
