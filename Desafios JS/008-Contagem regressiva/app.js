//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = prompt('Diga um número:');

while (numero != 0) {
    alert(numero);
    numero--;
    if (numero == 0) {
        console.log(numero);
    }
}