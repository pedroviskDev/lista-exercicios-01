const prompt = require('prompt-sync')();

let somatorio = 0;
let peso_total = 0;
let peso;
let numero = 0;
let media = 0;

while(true){
    numero = parseFloat(prompt('Digite um numero: '));
    if (numero == 0){
        break;
    }
    peso = parseFloat(prompt('Digite o peso do numero: '));

    peso_total += peso
    somatorio += (numero * peso)
}
if(isNaN(peso)){
    console.log('Não houve numeros para o calculo')
}
else{
    media = somatorio/peso_total
    console.log(media)
}

