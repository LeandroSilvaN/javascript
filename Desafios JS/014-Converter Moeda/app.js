//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function cotacaoReal(valor) {
    let dolar = 4.80;
    let cotacao = dolar * valor;
    console.log(`A cotação real é R$ ${cotacao}!`);
}

cotacaoReal(5);