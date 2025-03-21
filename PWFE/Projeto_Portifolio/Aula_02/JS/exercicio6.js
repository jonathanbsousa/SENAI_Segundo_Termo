let nota1, nota2, media

nota1 = Number(prompt("Digite a primeria nota"))
nota2 = Number(prompt("Digite a segunda nota"))

media = (nota1 + nota2) / 2

if(media >= 6){
    if(media % 2 == 0){
        document.write(`O aluno foi aprovado com a média ${media} sendo par`)
    } else {
        document.write(`O aluno foi aprovado com a média ${media} sendo impar`)
    }
} else {
    if(media % 2 == 0){
        document.write(`O aluno foi reprovado com a média ${media} sendo par`)
    } else {
        document.write(`O aluno foi reprovado com a média ${media} sendo impar`)
    }
}