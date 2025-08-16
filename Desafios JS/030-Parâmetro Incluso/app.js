// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function verificarSeEstaIncluso(lista, elemento) {
    return (lista.includes(elemento)) ? true : false;
}
let listaPar = [2, 4, 6, 8, 10];
let numero = 4;
console.log("A lista contém " + numero + " : " + verificarSeEstaIncluso(listaPar, numero));