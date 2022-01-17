"use strict"
// let $titulo = document.getElementById('titulo');
// console.log($titulo.textContent)
// $titulo.textContent = 'Titulo escrito en JS';
let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito en JS';
let $parrafo = document.querySelector('p');
$parrafo.textContent = 'Parrafos modificados';

// let $parrafos = document.querySelectorAll('p');
// $parrafos.forEach((parrafo1,indice)=>{
//     parrafo1.textContent = `Parrafo modificado ${indice}`;
// });

let $subtitulo = document.createElement('h3');
$subtitulo.textContent = 'Elemento h3 creado';
//document.body.append($subtitulo);
$titulo.insertAdjacentElement('afterend',$subtitulo);

let $contenido = document.querySelector('#contenido');
// console.log($contenido.textContent);    //Solo texto
// console.log($contenido.innerHTML);      //Texto y etiquetas
// console.log($contenido.outerHTML);      //Texto y etiquetas
let $contenidoparrafo = document.createElement('p');
$contenidoparrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild($contenidoparrafo);

$titulo.remove();