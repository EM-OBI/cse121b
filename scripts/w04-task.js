/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Godwin Bassey",
    photo: "images/profilePicture.jpg",
    favoriteFoods: ["Afang soup", "Fried rice", "Beef burger"],
    hobbies: ["Playing the piano", "Bike riding", "Watching cartoons"],
    placesLived: []
}




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: "Calabar, Nigeria",
    length: "25 years"
    }
)
myProfile.placesLived.push(
    {
    place: "Benin City, Nigeria",
    length: "6 months"
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo)
document.querySelector("#photo").setAttribute("alt", myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li")
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
    }
)


/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li")
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
    }
)

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
    let dt = document.createElement("dt")
    dt.textContent = placeLived["place"]
    let dd = document.createElement("dd")
    dd.textContent = placeLived["length"]

    document.querySelector("#places-lived").appendChild(dt)
    document.querySelector("#places-lived").appendChild(dd)

    }
)

