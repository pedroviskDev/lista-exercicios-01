const prompt = require('prompt-sync')();

const qt_macas_compradas = parseInt(prompt('Digite a quantidade de maçãs compradas: '));
let custo_total = 0;

if (qt_macas_compradas < 12){
    custo_total = qt_macas_compradas * 0.30;
}else{
    custo_total = qt_macas_compradas * 0.25;
}

console.log(`O custo total de ${qt_macas_compradas} compradas foi de: ${custo_total} R$`);