let url = "https://rickandmortyapi.com/api/character/";

function apiCall(url){
    
    fetch(url)
    
    .then(function(response) {
        return response.json();
        })
    
    .then(function(resp) {
        
        resp.results.forEach(function(character){
            document.querySelector("body").innerHTML += `
            <div>
                <p>${character.name}</p>
                <img src = "${character.image}"/>
            </div>
            `
        })    

        if (resp.info.next !== null) {
            apiCall(resp.info.next)
        }
        console.log(resp);
    })
};

apiCall(url)