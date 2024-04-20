let i = 100
let count = 0;
while(count < 50){
    let divisores = 2
    let eh_primo = true;
    while(divisores < i){
        if(i % divisores == 0){
            eh_primo = false;
            break;
        }
        divisores += 1
    }
    if (eh_primo){
        count += 1;
        console.log(`${count}° ocorrencia = ${i}`)
    }
    i++;
}