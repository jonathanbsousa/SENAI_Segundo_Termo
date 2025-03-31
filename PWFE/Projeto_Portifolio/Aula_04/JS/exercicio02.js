const numeros2 = [];
for (let i = 0; i < 8; i++) {
    numeros2.push(parseInt(window.prompt(`Digite o ${i + 1}º número:`)));
}
const media = numeros2.reduce((acc, num) => acc + num, 0) / numeros2.length;
document.write("Média aritmética:", media);