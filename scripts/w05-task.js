/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templesList = [];

/* async displayTemples Function */
const displayTemples = (templesList) => {
    templesList.forEach(temple => {
        const article = document.createElement("article");
        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", temple.location);
        article.appendChild(templeName);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templesList = await response.json();
    console.log(templesList);
    displayTemples(templesList);
}
/* reset Function */
const reset = (parent) => {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(templesElement);
    let htmlValue = document.querySelector("#filtered").value;
    switch (htmlValue) {
        case "utah":
            const utahTemples = temples.filter(temple => {
                return temple.location.includes("Utah");
            })
            displayTemples(utahTemples);
            break;
        case "notutah":
            const notUtahTemples = temples.filter(temple => {
                return !temple.location.includes("Utah");
            })
            displayTemples(notUtahTemples);
            break;
        case "older":
            const templesOlder1950 = temples.filter(temple => {
                const dedicationDate = new Date(temple.dedicated);
                return dedicationDate < new Date(1950, 0, 1);
            })
            displayTemples(templesOlder1950);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}



/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templesList)});

getTemples();