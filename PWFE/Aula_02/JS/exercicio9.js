let taxa, moeda 

taxa = Number(prompt("Digite a taxa de cambio"))
moeda = Number(prompt("Digite a quantidade de moedas desejada"))

moeda = moeda * taxa

document.write(`O valora convertido é ${moeda}`)

