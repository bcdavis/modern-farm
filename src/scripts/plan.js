const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

export const createPlan = () => {
    console.log("\n\nPlan Creation Start\n\n");
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }
    console.log("\n\nPlan Creation End\n\n");
    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

