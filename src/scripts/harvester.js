

/*  The harvester roams the field of plants (plantedPlantsArr) 
    for harvesting. When a plantObj is encountered, the 
    harvester collects a number of seeds (collectSeeds()) of 
    that plantObj equal to the plantObj's output value, and puts 
    those seeds into the seed collection bin (seedObjArray). 

    If the harvester encounters a corn plantObj, the harvester 
    will only collect a number of seeds equal to half of the 
    corn's output value. 

    When finished, the harvester returns the seeds it collected.
*/
const seedObjArray = [];


// collectSeeds takes in a plant object: {type, height, output}
// and collects a number of seeds from each plant equal to their 
// output value (only takes seeds = 1/2 output for corn).
const collectSeeds = (plantObj) => {
    // console.log("Plant: ", plantObj.type);
    let outVal = plantObj.output; // ----- changes the output value to an integer so we can iterate up to it
    if (plantObj.type === "Corn"){
        // Identified corn plantObj. Only take 1/2 output seeds
        // console.log("Corn plantObj identified -- outVal: ", outVal);
        outVal = outVal / 2;
        // console.log("Halved outVal: ", outVal);
    }
    // console.log("outVal before for-loop: ", outVal);
    for (let i = 0; i < outVal; i++){
        seedObjArray.push(plantObj)
    }
}

export const harvestPlants = (plantedPlantsArr) => {
    console.log("\n\nHarvest Start\n\n");
    // iterate through all plants and collect their seeds (collectSeeds())
    for (let plant of plantedPlantsArr){
        collectSeeds(plant); 
        
    }
    console.log("\n\nHarvest End\n\n");
    return seedObjArray; // return collected seeds
}