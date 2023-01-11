import {paintLetterboxes, paintLetterboxesG} from "./paintLetterboxes";

describe('paintLetterboxes', () => {
    const cases = [[125, 132, [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]]];
    it.each(cases)('%s - %s -> %s', (start, end, expected) =>
        expect(paintLetterboxes(start, end)).toStrictEqual(expected)
    );
    it.each(cases)('With generator: %s - %s -> %s', (start, end, expected) =>
        expect(paintLetterboxesG(start, end)).toStrictEqual(expected)
    );
});
