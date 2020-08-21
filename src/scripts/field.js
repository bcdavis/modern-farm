
const fieldCrops = []; // field of all the crops 

export const addPlant = (seedObj) => {
    fieldCrops.push(seedObj); // add seed to the field
}

export const usePlants = () => {
    return fieldCrops.slice(); //returns a copy of the cropList array
}