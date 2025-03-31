const calculadora = () => {

    let a = parseFloat(window.prompt('Digite o primeiro número:'));
    let b = parseFloat(window.prompt('Digite o segundo número:'));

    let operacao = window.prompt('Digite a operação (+, -, *, /):');
    let resultado;
    
    if (operacao === '+') {
        resultado = a + b;
    } else if (operacao === '-') {
        resultado = a - b;
    } else if (operacao === '*') {
        resultado = a * b;
    } else if (operacao === '/') {
        if (b !== 0) {
            resultado = a / b;
        } else {
            resultado = 'Erro: divisão por zero';
        }
    } else {
        resultado = 'Operação inválida';
    }
    
    document.write(`Resultado: ${resultado}`);
};

calculadora();