const prompt = require('prompt-sync')();

const total_eleitores = parseInt(prompt('Digite o total de eleitores: '));
const total_votos_brancos = parseInt(prompt('Digite o total de votos em branco: '));
const total_votos_nulos = parent(prompt('Digite o total de votos nulos: '));
const total_votos_validos = parseInt(prompt('Digite o total de votos validos: '));

if (total_eleitores !== 0) {
    const percentual_votos_brancos = (total_votos_brancos / total_eleitores) * 100;
    const percentual_votos_nulos = (total_votos_nulos / total_eleitores) * 100;
    const percentual_votos_validos = (total_votos_validos / total_eleitores) * 100;

    console.log(`${percentual_votos_brancos}% dos votos foram em branco`);
    console.log(`${percentual_votos_nulos}% dos votos foram nulos`);
    console.log(`${percentual_votos_validos}% dos votos foram validos`);
}
else{
    console.log('Não houve votos no municipio');
}