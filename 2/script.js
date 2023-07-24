let url = "https://randomuser.me/api/?format=json";

function apiCall(url){
    
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(resp){
       
        let persona = resp.results[0];
        let nombrePersona = persona.name.title + " " + persona.name.first + " " + persona.name.last;
        let direccion = persona.location.street.name + " " + persona.location.street.number + ", " + persona.location.city + ", " + persona.location.country + ", " + persona.location.postcode;
                
        document.querySelector("body").innerHTML = `
        <div>
            <img src="${persona.picture.large}"/>
            <p>${nombrePersona}</p>
            <p>${persona.email}</p>
            <p>${direccion}</p>
        </div>
        `
    })
}

apiCall(url);