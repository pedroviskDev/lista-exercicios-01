const prompt = require('prompt-sync')();

const id = parseInt(prompt('Digite o código de origem: '));


if (id == 1){
    console.log('Sul');
}
else if(id == 2){
    console.log('Norte')
}
else if(id == 3){
    console.log('Leste')
}
else if(id == 4){
    console.log('Oeste')
}
else if(id == 5 || id == 6){
    console.log('Nordeste')
}
else if(id >= 7 && id <= 9){
    console.log('Sudeste');
}
else if (id >= 10 && id <= 20){
    console.log('Centro-Oeste');
}
else if (id >= 25 && id <= 50){
    console.log('Nordeste');
}
else{
    console.log('Fora dos Intervalos - Produto Importado');
}