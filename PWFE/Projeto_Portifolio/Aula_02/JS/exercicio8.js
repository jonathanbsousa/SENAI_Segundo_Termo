let ano

ano = Number(prompt("Digite um ano para verificar se ele é bissexto:"))

if(ano % 4 == 0 &&  ano % 100 != 0 || ano % 400 == 0 ){
    document.write(`O ano ${ano} é bissexto`)
} else {
    document.write(`O ano ${ano} não é bissexto`)
}