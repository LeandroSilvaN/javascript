function verificarAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) ? "Ano bissexto" : "Ano não bissexto"; 
}

console.log(verificarAnoBissexto(2025));