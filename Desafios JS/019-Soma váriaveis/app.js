// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

let nome = prompt(`Boas-vindas, qual o seu nome?`);
alert(`Olá, ${nome}, vamos fazer uma soma!`);
let a = parseInt(prompt("Digite um número:"));
let b = parseInt(prompt("Digite outro número:"));
let c = a + b;

alert(`Caro ${nome}, você escolheu ${a} e ${b}`);
alert(`O resultado da sua soma é: ${c}`);