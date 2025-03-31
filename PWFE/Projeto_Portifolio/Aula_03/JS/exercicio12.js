const calcularJurosCompostos = () => {

    let capital = parseFloat(window.prompt('Digite o capital inicial:'));
    let taxa = parseFloat(window.prompt('Digite a taxa de juros (%):'));
    let tempo = parseInt(window.prompt('Digite o tempo (meses):'));

    let montante = capital * Math.pow((1 + taxa / 100), tempo);
    
    document.write(`Montante final: R$ ${montante.toFixed(2)}`);
};

calcularJurosCompostos();