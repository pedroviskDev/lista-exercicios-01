const prompt = require('prompt-sync')();

let somatorio = 0;
let numero;
let qt_numeros = 0;
let media = 0
while(true){
    numero = parseFloat(prompt('Digite um numero: '))
    if (numero == 0){
        break;
    }
    somatorio += numero
    qt_numeros++;
}

if (qt_numeros == 0){
    console.log('não houve numeros para o calculo')
}
else{
    media = somatorio / qt_numeros
    console.log(media)
}