const nomes = [];
for (let i = 0; i < 10; i++) {
    nomes.push(window.prompt(`Digite o ${i + 1}º nome:`));
}
const nomeProcurado = window.prompt("Digite um nome para buscar:");
const indice = nomes.indexOf(nomeProcurado);
if (indice !== -1) {
    document.write(`O nome ${nomeProcurado} está na posição ${indice}.`);
} else {
    document.write("Nome não encontrado!");
}
