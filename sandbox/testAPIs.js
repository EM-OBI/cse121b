const apiKey = "1420b2c4e0msh4ab9153a5e59991p1e7a3ejsn6e74b865bfce";
const apiUrl = "https://covid-19-statistics.p.rapidapi.com/regions";
const apiHost = "covid-19-statistics.p.rapidapi.com";

const covid = async () => {
    const result = await fetch(apiUrl, {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host':apiHost,
        }
    });
    const data = await result.json();
    console.log(data)
}

covid();