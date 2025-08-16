// Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

function confirmar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let dados = document.getElementById("dados");
    console.log(`Nome:${nome} Idade:${idade}`);
    dados.textContent = `Seu nome é ${nome}, sua idade é ${idade}`;
}