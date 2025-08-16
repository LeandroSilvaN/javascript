// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.

function separar() {
    let valor = document.getElementById("valor").innerHTML;

    let real = valor.split(",")[0];
    let centavo = valor.split(",")[1];

    let a = document.getElementById("a");
    let b = document.getElementById("b");
    a.textContent = `${real},00 reais`;
    b.textContent = `0,${centavo} centavos`;
}