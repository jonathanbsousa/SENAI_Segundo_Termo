let numero = parseFloat(window.prompt("Digite um número!"));

if (numero < 0 || !Number.isInteger(numero)) {
    alert('Número inválido! Por favor, digite um número inteiro positivo.');
} else {
    let fatorial = 1;
    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    
    document.write(`Fatorial de ${numero} é: ${fatorial}`);
}
