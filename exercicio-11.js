const prompt = require('prompt-sync')();

const eh_par = function(numero){
    if (numero % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

let valor = parseInt(prompt('Digite um numero: '));
while (!isNaN(valor) && valor >= 0){
    if(eh_par(valor)){
        console.log('Eh par');
    }
    else{
        console.log('Eh impar');
    }
    valor = parseInt(prompt('Digite um numero: '));
}