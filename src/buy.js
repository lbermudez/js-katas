export const buyWithPairsClass = (credit, prices) => {
    const pairsIter = Pairs.of(prices);
    let found = false;
    let max = 0;
    let result = [];
    while (!pairsIter.end() && !found) {
        const [[x, y], [v1, v2]] = pairsIter.next();
        if (v1 < credit && v2 < credit) {
            const sum = v1 + v2;

            if (sum === credit) {
                found = true;
                result = [x, y];
            } else if (sum < credit && sum > max) {
                max = sum;
                result = [x, y];
            }
        }
    }
    return result;
};

class Pairs {
    constructor(arrayOfNumbers) {
        if (!Array.isArray(arrayOfNumbers) && arrayOfNumbers.length < 2)
            throw new Error('unexpected array');
        this.arrayOfNumbers = arrayOfNumbers;
        this.x = 0;
        this.y = 0;
    }

    end() {
        return this.x === this.arrayOfNumbers.length - 2;
    }
    next() {
        this.y++;
        if (this.y === this.arrayOfNumbers.length) {
            this.x++;
            this.y = this.x + 1;
        }
        const xV = this.arrayOfNumbers[this.x];
        const yV = this.arrayOfNumbers[this.y];
        if (isNaN(xV) || isNaN(yV))
            throw new Error('unexpected not number value');
        return [
            [this.x, this.y],
            [xV, yV],
        ];
    }

    static of(arrayOfNumbers) {
        return new Pairs(arrayOfNumbers);
    }
}

export const buyWithPairsGenerator = (credit, prices) => {
    let max = 0;
    let indexes = [];
    const pairsIterator = pairs(prices);
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const { done, value } = pairsIterator.next();
        if (done) break;
        const [[x, y], [v1, v2]] = value;
        if (v1 < credit && v2 < credit) {
            const sum = v1 + v2;
            if (sum === credit) {
                indexes = [x, y];
                break;
            } else if (sum < credit && sum > max) {
                max = sum;
                indexes = [x, y];
            }
        }
    }
    return indexes;
};

function* pairs(prices) {
    for (let x = 0; x < prices.length - 1; x++) {
        for (let y = x + 1; y < prices.length; y++) {
            yield [
                [x, y],
                [prices[x], prices[y]],
            ];
        }
    }
}
