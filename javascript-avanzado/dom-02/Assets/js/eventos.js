"use strict"
let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanerror = document.querySelector('span');
$btnMensaje.addEventListener('click',() => {
    console.log('Has presionado el boton');
});
$mensaje.addEventListener('keyup',(e) =>{
    if (e.target.value.length<3){
        $spanerror.classList.replace('hide','error');
    } 
    else{
        $spanerror.classList.replace('error','hide');
    }
});
