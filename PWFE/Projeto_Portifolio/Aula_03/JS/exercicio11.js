const calcularINSS = () => {

    let salario = parseFloat(window.prompt('Digite seu salário:'));
    let inss;

    if (salario <= 1320) {
        inss = salario * 0.075;
    } else {
        inss = salario * 0.14;
    }
    
    document.write(`Valor do INSS: R$ ${inss.toFixed(2)}`);
};

calcularINSS();