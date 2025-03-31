const ordenarNumeros = () => {
    
    let a = parseFloat(window.prompt('Digite o primeiro número:'));
    let b = parseFloat(window.prompt('Digite o segundo número:'));
    let c = parseFloat(window.prompt('Digite o terceiro número:'));

    document.write(`Ordenação: ${[a, b, c].sort((x, y) => x - y)}`);
};

ordenarNumeros();