//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function indiceMassaCorporal(peso, altura) {
    let massaCorporal = parseInt(peso / (altura * altura));
    console.log(`O seu IMC é ${massaCorporal}!`);
    if (massaCorporal >= 29.9) {
        console.log('Você está obeso!');
    } else { 
        if (massaCorporal >= 25) {
        console.log('Você está sobrepeso!');
    } else {
        if (massaCorporal <= 18.5){
            console.log('Você está abaixo do normal');
        } else {
            console.log('Você está em forma!');
            }
        }
    }
}

indiceMassaCorporal(85, 1.70);