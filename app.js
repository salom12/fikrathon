function findTheLastSurvivor(numberOfSoldiers, orderToDie) {
    var survivor = 0;

    if (numberOfSoldiers > 0) {
        survivor = ((((findTheLastSurvivor(numberOfSoldiers - 1, orderToDie)) + orderToDie - 1) % numberOfSoldiers) + 1);
    }
    return survivor;
};

console.log(findTheLastSurvivor(8247, 2))
console.log(findTheLastSurvivor(2387, 2))
console.log(findTheLastSurvivor(4424, 2))