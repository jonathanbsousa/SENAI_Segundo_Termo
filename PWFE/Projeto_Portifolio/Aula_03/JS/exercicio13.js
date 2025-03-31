const calcularFinanciamento = () => {
    
    let valor = parseFloat(window.prompt('Digite o valor do financiamento:'));
    let taxa = parseFloat(window.prompt('Digite a taxa de juros (%):'));
    let meses = parseInt(window.prompt('Digite o número de meses:'));

    let parcela = (valor * (taxa / 100)) / (1 - Math.pow(1 + taxa / 100, -meses));

    document.write(`Valor da parcela: R$ ${parcela.toFixed(2)}`);
};

calcularFinanciamento();