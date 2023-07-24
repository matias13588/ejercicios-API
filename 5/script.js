let URL = "https://swapi.dev/api/planets/";

function apiCall(URL){
    fetch(URL)
    .then(resp => resp.json)
    .then(res => {
        res.results.forEach(planet => {
            document.getElementById("select").innerHTML += `
            <select>
                <option selected disabled>Selecciona un planeta</option>
                
            `
        })
    })
}