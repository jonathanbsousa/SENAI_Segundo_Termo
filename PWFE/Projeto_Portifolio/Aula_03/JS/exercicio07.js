const calcularCedulas = () => {
    let valor = window.prompt("Insira o valor que deseja calcular")
    let cedulas = [200, 100, 50, 20, 10, 5, 1];
    let resultado = {};
    
    for (let cedula of cedulas) {
        resultado[cedula] = Math.floor(valor / cedula);
        valor %= cedula;
    }

    document.write(resultado);
};

calcularCedulas()