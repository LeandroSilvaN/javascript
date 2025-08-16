// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá - la em frases menores com base em um ponto e vírgula como delimitador.

function cortar() {
    let frase = document.getElementById("frase").innerHTML;

    let parteA = frase.split(";")[0];
    let parteB = frase.split(";")[1];

    let a = document.getElementById("a");
    let b = document.getElementById("b");
    
    a.textContent = parteA;
    b.textContent = parteB;
}