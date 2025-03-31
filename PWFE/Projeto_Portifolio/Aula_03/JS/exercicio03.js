const imprimirLetras = () => {
    
    let nome = window.prompt('Digite um nome:');
    let resultado = '';

    for (let letra of nome) {
        resultado += letra + '\n';
    }

    document.write(resultado);
};

imprimirLetras();