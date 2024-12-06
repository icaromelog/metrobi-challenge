export function findHighestSafeFloor() {
    const step = 14;
    let egg1 = step;
    let egg2 = 1;

    // First egg to find the range
    while (egg1 <= 100 && !dropEgg(egg1)) {
        egg2 = egg1;
        egg1 += step;
    }

    // Second egg to find the exact floor
    egg1 = egg2 + 1;
    while (egg1 <= 100 && !dropEgg(egg1)) {
        egg1++;
    }

    return egg1 - 1;
}

function dropEgg(floor) {
    const highestSafeFloor = 10;
    return floor > highestSafeFloor;
}