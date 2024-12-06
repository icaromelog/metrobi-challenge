export function getMaxValue(carrotTypes, capacity) {
    // Sort carrot types by price per kg in descending order
    carrotTypes.sort((a, b) => (b.price / b.kg) - (a.price / a.kg));

    let maxValue = 0;
    let remainingCapacity = capacity;

    for (let i = 0; i < carrotTypes.length; i++) {
        if (remainingCapacity === 0) break;

        const { kg, price } = carrotTypes[i];
        const amount = Math.min(remainingCapacity, kg);
        maxValue += (amount / kg) * price;
        remainingCapacity -= amount;
    }

    return maxValue;
}