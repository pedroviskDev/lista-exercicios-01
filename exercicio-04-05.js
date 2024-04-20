const prompt = require('prompt-sync')();

const nota_01 = parseFloat(prompt('Digite a primeira nota: '));
const nota_02 = parseFloat(prompt('Digite a segunda nota: '));

const media = (nota_01 + nota_02) / 2 ;

if (media >= 6) {
    console.log('PARABÉNS! Você foi aprovado');
}
else {
    console.log('Você foi REPROVADO! Estude mais');
}