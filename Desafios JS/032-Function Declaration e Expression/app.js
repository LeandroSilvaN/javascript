//Function Declaration

//eUmPalidromo();

//function eUmPalidromo() {
//    let palavra = "ovo";
//    let separarCaracteres = palavra.split("");
//    let palavraInvertida = separarCaracteres.reverse();
//    palavraInvertida = palavraInvertida.join("");
//    if (palavra === palavraInvertida) {
//        console.log(`A palavra ${palavra} é um palídromo`)
//    } else {
//        console.log(`A palavra ${palavra} não é um palídromo`);
//    }
//}

// Function Expression

const eUmPalidromo = function (palavra) {
    let separarCaracteres = palavra.split("");
    let palavraInvertida = separarCaracteres.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra === palavraInvertida) {
        console.log(`A palavra ${palavra} é um palídromo`)
    } else {
        console.log(`A palavra ${palavra} não é um palídromo`);
    }
}

eUmPalidromo("ovo");