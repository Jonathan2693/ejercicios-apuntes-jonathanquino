let $btnGato = document.querySelector('#btnGato');
$btnGato.addEventListener('click',() => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((respuesta) => respuesta.json()).then (data => {
            console.log(data);
            let $imagenGato = document.createElement('img');
            $imagenGato.src = data[0].url;
            document.body.appendChild($imagenGato);
        })
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(respuesta1 => respuesta1.json()). then (datos => {
            console.log(datos);
            let $imagenPerro = document.createElement('img');
            $imagenPerro.src = datos.message;
            document.body.appendChild($imagenPerro);
        })
});