let secretNumber = parseInt(Math.random()*100);
console.log(secretNumber);

function getNumber() {
    let number = document.getElementById('number').value;
    let secretGuess = document.getElementById('secretGuess');
    let guess;

    if (number == secretNumber) {
        guess = "Felicidades, adivinaste el número secreto";
    }
    else if (Math.abs(secretNumber - number) <= 5){
        guess = "Calienteeeee";
    }
    else if (Math.abs(secretNumber - number) <= 10 && Math.abs(secretNumber - number) > 5){
        guess = "Caliente";
    }
    else if (Math.abs(secretNumber - number) <= 20 && Math.abs(secretNumber - number) > 10){
        guess = "Tibio";
    }
    else if (Math.abs(secretNumber - number) <= 30 && Math.abs(secretNumber - number) > 20){
        guess = "Frío";
    }
    else {
        guess = "Congelado";
    }

    secretGuess.innerHTML = `<p>${guess}</p>`; 
}