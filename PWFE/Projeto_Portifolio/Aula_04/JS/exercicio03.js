const idades = [];
for (let i = 0; i < 20; i++) {
    idades.push(parseInt(window.prompt(`Digite a idade da ${i + 1}ª pessoa:`)));
}
const mediaIdades = idades.reduce((acc, idade) => acc + idade, 0) / idades.length;
const acimaDaMedia = idades.filter(idade => idade > mediaIdades);
document.write("Idades acima da média:", acimaDaMedia);
