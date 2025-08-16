//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let resposta1 = 1;
let resposta2 = 2;
let resposta3 = 1;

let pergunta1 = prompt('Responda, 20 + 1 = / alternativas 1) 21 ou 2) 25');
let pergunta2 = prompt('Responda, a terra é plana? / alternativas 1) sim ou 2) não');
let pergunta3 = prompt('Responda, o tomate é uma fruta? / alternativas 1) sim ou 2) não');

let pontuacao = 0;

if (resposta1 == pergunta1) {
    pontuacao = pontuacao + 50;
}

if (resposta2 == pergunta2) {
    pontuacao = pontuacao + 50;
}

if (resposta3 == pergunta3) {
    pontuacao = pontuacao + 50;
}

console.log('Pontuação: ' + pontuacao);

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}
