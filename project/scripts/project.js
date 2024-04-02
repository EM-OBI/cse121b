let countryList = [];
let displayList = [];
const display = document.querySelector("#display");
const countryHeader = {
    'X-RapidAPI-Key': '1420b2c4e0msh4ab9153a5e59991p1e7a3ejsn6e74b865bfce',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
}
let country;
let date;


let params = {};

const getCountries = async () => {
    const url = "https://covid-19-statistics.p.rapidapi.com/regions"
    const response = await fetch(url, {
        headers: countryHeader
    });
    if (response.ok){
        const data =  await response.json();
        countryList = data["data"]
        console.log(countryList);
        addCountries(countryList);
    }
}

const getStats = async () => {
    country = document.querySelector("#country").value;
    date = document.querySelector("#date").value;
    const url = `https://covid-19-statistics.p.rapidapi.com/reports?iso=${country}&date=${date}`;
    const headers = countryHeader;
    const response = await fetch (
        url, 
        {headers: headers}, 
    )
    if (response.ok) {
        const data = await response.json();
        displayList = data.data;
        console.log(displayList);
    }
    if (country === "" && date ==="")
    {
        alert("Select Country and Date")
    }
    else if (country === ""){
        alert("Select country")
    }
    else if (date === ""){
        alert("Type Date")
    }
    else{
        displayData(displayList);
    }
}

const addCountries = (list) => {
    const countryNode = document.querySelector("#country");
    const firstOption = document.createElement("option");
    firstOption.textContent = "Select country";
    firstOption.setAttribute("value", "")
    firstOption.setAttribute("disabled", "disabled")
    firstOption.setAttribute("selected", "selected")
    countryNode.appendChild(firstOption);
    list.forEach((country) => {
        // console.log("hello world")
        const option = document.createElement("option");
        option.setAttribute("value", `${country.iso}`);
        option.textContent = `${country.name}`;
        countryNode.appendChild(option);
    });
}

const reset = (parent) => {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const displayData = (list) => {
    reset(display);
    const displayBox = document.createElement("div");
    display.appendChild(displayBox);
    displayBox.setAttribute("id", "displayBox");
    let totalDeaths = 0;
    let totalConfirmedCases = 0;
    let totalRecovered = 0;
    let totalActiveCases = 0;
    list.forEach((country) => {
        const deaths = (country.deaths);
        const confirmed = (country.confirmed);
        const recovered = (country.recovered);
        const active = (country.active);
        totalDeaths += deaths;
        totalConfirmedCases += confirmed;
        totalRecovered += recovered;
        totalActiveCases += active;
    })
    displayBox.innerHTML += `<h4>Stats for ${date}</h4>`
    displayBox.innerHTML += `<hr>`
    displayBox.innerHTML += `<li>Total Deaths: ${totalDeaths.toLocaleString()}</li>`;
    displayBox.innerHTML += `<li>Confirmed Cases: ${totalConfirmedCases.toLocaleString()}</li>`;
    displayBox.innerHTML += `<li>Total Recovered: ${totalRecovered.toLocaleString()}</li>`;
    displayBox.innerHTML += `<li>Active cases: ${totalActiveCases.toLocaleString()}</li>`;
    console.log(totalDeaths)
    console.log(totalConfirmedCases)
    console.log(totalRecovered)
    console.log(totalActiveCases)
}

document.querySelector("#getStats").addEventListener("click", () => {getStats()});
// getStats()
getCountries();