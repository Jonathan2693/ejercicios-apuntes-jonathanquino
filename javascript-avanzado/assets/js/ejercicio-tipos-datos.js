var fechaActual = new Date();
var actual = fechaActual.getFullYear();
usuario = parseInt(prompt('Ingresa tu año de nacimiento'));
if (isNaN(usuario)) alert('No ingresaste datos correctamente');
else document.write('<h2> Tu edad es de ' + (actual-usuario).toString() + ' años </h2>');