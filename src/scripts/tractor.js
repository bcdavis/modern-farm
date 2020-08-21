
import { addPlant } from './field.js';

import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower} from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

// create empty seed objects to be assigned value returned by 'create[seedName]()'
let cornSeed, asparagusSeed, potatoSeed, sunflowerSeed, soybeanSeed, wheatSeed;

export const plantSeeds = (yearPlan) => {
    console.log("\n\nPlanting Start\n\n");
    // ----- iterate through arrays in yearPlan array
    for (let row of yearPlan){
        // ----- iterate through plant elements in those arrays
        for (let plant of row){
            // ----- check each plant and create its corresponding seed
            switch (plant){
                case "Asparagus":
                    // console.log("Plant Asparagus");
                    asparagusSeed = createAsparagus();
                    addPlant(asparagusSeed);
                    break;

                case "Wheat":
                    // console.log("Plant Wheat");
                    wheatSeed = createWheat();
                    addPlant(wheatSeed);
                    break;

                case "Potato":
                    // console.log("Plant Potato");
                    potatoSeed = createPotato();
                    addPlant(potatoSeed);
                    break;

                case "Corn":
                    // console.log("Plant 2 Corn");
                    cornSeed = createCorn();
                    addPlant(cornSeed[0]); // plant first corn object
                    addPlant(cornSeed[1]); // plant second corn object
                    break;

                case "Soybean":
                    // console.log("Plant Soybean");
                    soybeanSeed = createSoybean();
                    addPlant(soybeanSeed);
                    break;

                case "Sunflower":
                    // console.log("Plant Sunflower");
                    sunflowerSeed = createSunflower();
                    addPlant(sunflowerSeed);
                    break;
                
                default:
                    console.log("ERROR --- Plant not recognized");



            }
            // console.log("Next plant");
        }
        // console.log("Next row");
    }
    console.log("\n\nPlanting End\n\n")
}