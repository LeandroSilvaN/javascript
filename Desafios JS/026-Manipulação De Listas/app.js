// Adicione os números 1, 2, 3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável.Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista.Imprima novaLista no console.

let minhaLista = [];
minhaLista.push(1, 2, 3);
alert(minhaLista);
let outraLista = [4, 5, 6];
let novaLista = minhaLista.concat(outraLista);
alert(novaLista); // juntando com outra lista

// Remova o último elemento de novaLista. Imprima novaLista após a remoção.

novaLista.pop();
alert(novaLista); // removendo último elemento

// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
embaralha(novaLista);
alert(novaLista); // lista embalharada

// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.
novaLista = novaLista.concat(novaLista);
alert(novaLista); // lista duplicada
function removerDuplicatas(lista) {
    return [... new Set(lista)];
} 

novaLista = removerDuplicatas(novaLista);
alert(novaLista); // removendo duplicatas