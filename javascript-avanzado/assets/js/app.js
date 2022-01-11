var title = document.getElementById('title');
console.log(title);
title.textContent='Este texto se esribió en javascript';
/*var parrafos = document.getElementsByTagName('p');
for(let i=0; i<parrafos.length;i++){
    parrafos[i].textContent = "Texto "+ i.toString() + " escrito en javascript";
}*/
var correo = document.getElementById('correo');
var contrasena = document.getElementById('contraseña');
function getdatos(){
    console.log(correo.value);
    console.log(contrasena.value);
}