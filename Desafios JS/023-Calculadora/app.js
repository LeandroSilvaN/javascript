// Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

function fazerConta() {
    let a = parseInt(document.getElementById("numA").value);
    let b = parseInt(document.getElementById("numB").value);
    let sinal = document.getElementById("sinal").value;

    if (isNaN(a) || isNaN(b)) {
        alert("Selecione um número.");
        return;
    }

    if (sinal === "soma" || sinal === "subtracao" || sinal === "multiplicacao" || sinal === "divisao") {
        document.getElementById("numA").value = "";
        document.getElementById("numB").value = "";
    } else {
        alert("sinal inválido.");
    }

    if (sinal === "soma") {
        document.getElementById("resultado").textContent = `Resultado: ${a + b}`;
    } else if (sinal === "subtracao") {
        document.getElementById("resultado").textContent = `Resultado: ${a - b}`;
    } else if (sinal === "multiplicacao") {
        document.getElementById("resultado").textContent = `Resultado: ${a * b}`;
    } else if (sinal === "divisao") {
        document.getElementById("resultado").textContent = `Resultado: ${a / b}`;
    } else {
        alert("sinal inválido.");
    }
}