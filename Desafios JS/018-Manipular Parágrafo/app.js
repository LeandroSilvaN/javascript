// Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

function trocar() {
    let paragrafo = document.getElementById("paragrafo").value;
    let frase = document.getElementById("frase");

    console.log(`${paragrafo}`);
    frase.textContent = `${paragrafo}`;
}