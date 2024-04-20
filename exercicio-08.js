const prompt = require('prompt-sync')();

const valor_1 = prompt('Digite o primeiro valor: ');
const valor_2 = prompt('Digite o primeiro valor: ');

if (valor_1 < valor_2) {
    console.log(valor_1, valor_2);
}
else{
    console.log(valor_2, valor_1);
}