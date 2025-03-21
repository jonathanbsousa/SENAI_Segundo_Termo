let numero

numero = Number(prompt("Digite um numero (1~9)"))

for(let i = 1; i < 11; i++){
    document.write(`${numero} X ${i} = ${numero*i} <p>`)
}