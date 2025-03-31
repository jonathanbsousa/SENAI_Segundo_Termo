for (let i = 0; i < 10; i++) {
    numeros3.push(parseInt(window.prompt(`Digite o ${i + 1}º número:`)));
}
const pares = numeros3.filter(num => num % 2 === 0);
if (pares.length > 0) {
    document.write("Números pares:", pares);
} else {
    document.write("Todos os números são ímpares.");
}
