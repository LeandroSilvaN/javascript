function converterStringParaNumero(valorString) {
    return parseInt(valorString);
}
let valorString = "12";
console.log(valorString + 0); // retorna 120;
let valorInteiro = converterStringParaNumero(valorString);
console.log(valorInteiro + 0); // retorna 12;