let url = "https://swapi.dev/api/planets";

function apiCall(url){

    fetch(url)
       
        .then(function(response) {
            return response.json();
            })
        
        .then(function(resp) {
            console.log(resp)

            resp.results.forEach(function(results){
                document.querySelector("select").innerHTML += `
                <option id="opcion" value="${results.name}">${results.name}</option>
                `
            })

            if (resp.next !== null) {
                apiCall(resp.next)
            }
        });    
};

apiCall(url);