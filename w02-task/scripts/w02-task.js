/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Godwin Bassey";
let currentYear = 2024;
let profilePicture = "images/profilePicture.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imgElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imgElement.setAttribute("src", profilePicture);
imgElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
const favFoods = ["Afang soup", "Fried rice", "Beef burger"];
const favFood = "Shawarma";
favFoods.push(favFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;


