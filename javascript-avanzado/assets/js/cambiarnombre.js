var title = document.getElementById('title');

function cambiarnombre(){
   let nombre =  prompt('Ingresa tu nombre').toString();
   title.textContent = 'Hola ' + nombre;
}