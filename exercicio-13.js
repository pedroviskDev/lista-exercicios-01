const prompt = require('prompt-sync')();

for(let i = 0; i < 5; i++){
    let n = prompt('Digite um numero: ');
    for(let j = 1; j  <= n; j++){
        console.log(`${j} X ${n} = ${n * j}`)
    }
}