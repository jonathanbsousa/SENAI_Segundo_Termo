// For: eu sei quantas vezes eu quero executar algo.

for(let i = 10; i > 0; i--){
    document.write(`Numero: ${i} <br>`)
}

// While: existe uma condição para eu parar
let contador = 10
while(contador <= 50){
    document.write(`Valor atual: ${contador} <p>`)
    contador = contador + 10
}

// do while: executo pelo menos uma vez depois vejo um condicional

let a = 1

do{
    if(a % 2 == 0){
        document.write(`O numero é par <p>`)
    } else {
        document.write(`O numero é impar <p>`)
    }
    a++

}while(a < 20)

// Switch case: multipla escolhas de execução

let numero1 = Number(prompt("Digite um numero: "))
let numero2 = Number(prompt("Digite um numero: "))
let operacao = Number(prompt("Qual operação você quer?\n 1 - Somar\n 2- Subtração\n" + 
    " 3 - Multiplicação\n 4 - Divisão"))

switch(operacao){
    case 1:
        soma = numero1 + numero2
        document.write(`O Resultado é ${soma}`)
        break

    case 2:
        subtracao = numero1 - numero2
        document.write(`O Resultado é ${subtracao}`)
        break

    case 3:
        multiplicacao = numero1 * numero2
        document.write(`O Resultado é ${multiplicacao}`)
        break

    case 4:
        divisao = numero1 / numero2
        document.write(`O Resultado é ${divisao}`)
        break
}

function saudar(){
    alert("Parabens")
}

function soma(a, b){
    return a + b
}

function somaVarios(a, b, c, d){
    return a + b + c + d
}

let resultado = soma(10,30)
document.write(`O resultado da soma é de ${resultado} <br>`)

let resposta = somaVarios(30,20,10,65)
document.write(`O resultado da soma de varios é de ${resposta} <br>`)

saudar();

const dividir = (v1, v2) => v1/v2

document.write(`O resultado da arrow function é de: ${dividir(100,2)}`)

function converterMaiusculo(texto){
    return texto.toUpperCase();
}

let frase = prompt("Digite uma frase")
let fraseMaiuscula = converterMaiusculo(frase)
document.write(fraseMaiuscula)

