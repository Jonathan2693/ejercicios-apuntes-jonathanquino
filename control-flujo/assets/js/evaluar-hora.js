let hora = parseInt(prompt('Ingresa la hora en formato de 24hrs'));
if ((hora>=6)&&(hora<=11)) alert('Buenos dias');
else if ((hora>=12)&&(hora<=18)) alert('Buenas tardes');
else if ((hora>=19)&&(hora<=23)) alert('Buenas noches');
else if ((hora>=0)&&(hora<=5)) alert('Dejame dormir');
else alert('No esta definido');

