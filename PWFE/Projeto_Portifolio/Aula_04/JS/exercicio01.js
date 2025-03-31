const numeros1 = [];
for (let i = 0; i < 5; i++) {
    numeros1.push(parseInt(window.prompt(`Digite o ${i + 1}º número:`)));
}
document.write("Dobro dos valores:", numeros1.map(num => num * 2));