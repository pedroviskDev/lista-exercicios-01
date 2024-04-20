const prompt = require('prompt-sync')();

let valor_01 = parseInt(prompt('Digite o primeiro numero: '));
let valor_02 = parseInt(prompt('Digite o segundo numero: '))
let valor_03 = parseInt(prompt('Digite o terceiro numero: '))
let valor_04 = parseInt(prompt('Digite o quarto numero: '))

valor_04 = valor_01 + valor_02 + valor_03 ;
valor_01 += 25;
valor_02 *= 3;
valor_03 *= (12/100);

console.log(`o primeiro numero (${valor_01 - 25}) somado com 25: ${valor_01}`);
console.log(`o segundo numero (${valor_02 / 3}) triplicado: ${valor_02}`);
console.log(`12 % do terceiro numero: ${valor_03}`);
console.log(`a soma dos tres primeiros numeros originais: ${valor_04}`);