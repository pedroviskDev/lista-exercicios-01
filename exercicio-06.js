const prompt = require('prompt-sync')();

const lado_a = parseInt(prompt('Digite o comprimento do lado A: '));
const lado_b = parseInt(prompt('Digite o comprimento do lado B: '));
const lado_c = parseInt(prompt('Digite o comprimento do lado C: '));

const ehTriangulo = function (a, b, c ){
    if ((a < b + c ) && (b < a + c) && (c < a + b) ){
        return true;
    }
    else {
        return false;
    }
}

const tipoTriangulo = function(a, b, c){
    if (a == b && a == c){
        return 'Triangulo equilatero'
    }
    else if ((a == b) || (a == c) || (c == b) ){
        return 'Triangulo isosceles'
    }
    else{
        return 'Triangulo escaleno'
    }
}

if (ehTriangulo(lado_a, lado_b, lado_c)){
    console.log(tipoTriangulo(lado_a, lado_b, lado_c))
}
else{
    console.log('Nao eh triangulo')
}