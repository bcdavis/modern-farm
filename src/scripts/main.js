console.log("Welcome to the main module")

import {createPlan} from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { addPlant, usePlants} from './field.js';
import { plantSeeds } from './tractor.js';

import { harvestPlants } from './harvester.js';


// ------- seed creation ----------
//const asparagusSeed = createAsparagus();
//console.log(asparagusSeed);

//const cornSeed = createCorn();
//console.log(cornSeed);

//const potatoSeed = createPotato();
//console.log(potatoSeed);


// ---------- plan creation -----------
const yearlyPlan = createPlan();
console.log("The following yearly plan was created: ");
console.log(yearlyPlan);

// ----- planting seeds in field ------
/*
addPlant(cornSeed);
addPlant(asparagusSeed);
addPlant(asparagusSeed);
addPlant(potatoSeed);
*/
/*
// -------- printing out field --------
const field = usePlants();
console.log(field);
*/

// - plant with tractor by yearlyPlan -
plantSeeds(yearlyPlan);
const field = usePlants();
console.log("The tractor planted the following crops: ");
console.log(field);


// ---------- Harvest field -----------
const cropYield = harvestPlants(field);
console.log("Yield from harvest:");
console.log(cropYield);

