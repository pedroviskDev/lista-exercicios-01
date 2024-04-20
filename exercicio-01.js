const prompt = require('prompt-sync')();

const temperatura_celcius = parseFloat(prompt("Digite a temperatura em Celsius para conversão: "));

const temperatura_fahrenheit = (temperatura_celcius * 1.8) + 32

console.log(`${temperatura_celcius} graus celcius eh igual a ${Math.round(temperatura_fahrenheit)} graus fahrenheit`);