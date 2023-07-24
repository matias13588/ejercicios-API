let urlNasa = "https://api.nasa.gov/planetary/apod?api_key=EFd7gfkUtwUb565YyYWa6aF27W7fvSaZbWotBEcN&date="

document.querySelector("#submit").addEventListener("click", function(e){
    e.preventDefault() //PARA EVITAR QUE EL FORMULARIO SE RECARGUE TODO EL TIEMPO

    let year = document.querySelector("#year").value;
    let mes = document.querySelector("#mes").value;
    let dia = document.querySelector("#dia").value;

    let date = `${year}-${mes}-${dia}`;

    fetch(urlNasa + date)
    .then(function(response){
        return response.json();
    })
    
    .then(function(resp){
        console.log(resp);
        document.querySelector("#resultado").innerHTML = `
            <p>${resp.date}</p>
            <p>${resp.title}</p>
            <img src = "${resp.url}"/>
            <p>${resp.explanation}</p>
        `;
    });
    
    
})




// let form = document.querySelector("form");

// console.log(form.dia);

// let dia = form.dia.value;

// console.log();