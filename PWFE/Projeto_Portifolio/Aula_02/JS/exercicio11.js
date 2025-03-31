let escolhaUsuario

escolhaUsuario = window.prompt("Pedra Papel ou Tesoura?").toLowerCase()

let opcoes = ['pedra', 'papel', 'tesoura'];
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

document.write('<p>Você escolheu: ' + escolhaUsuario);
document.write('<p>Computador escolheu: ' + escolhaComputador);

if (escolhaUsuario === escolhaComputador) {
    document.write('<p>Empate!');
} else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
) {
    document.write('<p>Você ganhou!');
} else {
    document.write('<p>Você perdeu!');
}
