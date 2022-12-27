export const countSheep = (amountOfSheep) => {
    let sheep = '';
    for (let i = 1; i <= amountOfSheep; i++) {
        sheep = sheep.concat(`${i} sheep...`);
    }
    return sheep;
};
