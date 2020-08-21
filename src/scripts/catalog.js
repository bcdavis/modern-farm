

const Food = (foodItem) => {
    console.log("create Food HTML element");
    return `
        <section class="plant">${foodItem.type}</section>
    `
}

export const Catalog = (harvestedPlants) => {
    console.log("\n\nCatalog Start\n\n");
    const contentElement = document.querySelector(".container");
    let foodHTMLRepresentation = "";
    for (const plant of harvestedPlants){
        foodHTMLRepresentation += Food(plant);
    }

    contentElement.innerHTML += `
        ${foodHTMLRepresentation}
    `
}