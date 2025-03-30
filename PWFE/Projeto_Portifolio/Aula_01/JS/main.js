let nome, idade

// Alert 
// Quando quero chamar a atenção do usuário onde ele é obrigado a clicar em ok

window.alert("Hello World")
alert("Welcome to the JS class")

// Prompt - Input
// Permite que o usuário insira um valor

nome = window.prompt("Digite seu nome:")
idade = prompt("Digite sua idade:")

// Confirm
//Exibo uma mensagem que mostra os botões OK e Cancelar

window.confirm("Tudo bem?")
confirm("Certeza?")

document.write(`Seu nome é ${nome} `)

document.write(`Sua idade é ${idade}`)

// Variaveis do tipo 'Const'são variaveis imutaveis ou que mudam minimamente
// Variaveis do tipo 'Let' são variaveis que podem ser utilizadas para armazenar dados, utilizado normalmente somente em um escopo 
// Variaveis do tipo 'Var' são variaveis que podem ser utilizadas para armazenar dados, mas, podem ser utilizadas em diversas áreas de escopo

let nota1, nota2, nota3, resultado

nota1 = Number(prompt("Informe sua primeira nota:"))
nota2 = Number(prompt("Informe sua segunda nota:"))
nota3 = Number(prompt("Informe sua terceira nota:"))

resultado = (nota1 + nota2 + nota3)/3

if(resultado >= 6){
    document.write("Aprovado <br>")
}
else{
    document.write("Reprovado <br>")
}

document.write(`Sua média é de ${resultado}`)

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

let resultado2 = soma(10,30)
document.write(`O resultado da soma é de ${resultado2} <br>`)

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

//Algoritimos
//Abstração: Entender um problema real e ver a solução computacional
//Estruturas de Dados: declaração de variaveis para a performação do códgo
//{let (valores flexiveis, manipulação durante execução) , const (valores fixos ou "crachado"), var (legado), Array (Varivel que possui um conjuntos de valores indexados)} 
//Simplicidade: menutenivel - documentado, códgio legivel, comentarios, facil manutenção.
//Modularidade: Funções e Orientação a Objeto é como dividimos um grande código ao ponto dele ser reutilizavel

//Declaração é feita com []

numeros = [10, 20, 30, 40, 50]
nome = ["Rafa", "Nicole", "Jonathan", "Duda","Lucas" , "Vinícius"]

for(let i in numeros){
    document.write(`${i}`)
}

document.write(`<p>`)

for(let i of numeros){
    document.write(`${i}`)
}

document.write(`<p>`)

//Percorrer Array: o comando mais apropriado é p forEach
numeros.forEach(function(valores){
 document.write(`${valores}<br>`)
});

nome.forEach(item => document.write(`${item}<br>`));

//Para inserir um valor final ao array, se utiliza o comando push
numeros.push(60)
document.write(`${numeros}<br>`)

//Inserindo um elemento inicial no meu arry
numeros.unshift(0)
document.write(`${numeros}<br>`)

//Excluindo o ultimo elemento de um array

//Funções de callback: MAP, Filter, Find
//MAP: eu declaro uma segunda variavel para obter uma resposta tratativa de um array original
let metade = numeros.map(n => n/2)
document.write(`${metade}<br>`)

//manipulação de texto
let grnade = nome.map(nome => nome.toUpperCase())
document.write(`${grnade}<br>`)

//Filter: filtra todos os valore do arrya que atendam uma condição
let num = numeros.filter(function(numero){
    return numero % 3 === 0
})
document.write(`${num}<br>`)

//Find: percorre o Array inteiro e para no primeiro valor que atender a condição
let primeiro = numeros.find(function(numero){
    return numero % 2 === 0
})
document.write(`${primeiro}<br>`)

//Spread: concatenação de 2 arrays
livrosP = ["Percy Jackson", "Diario de um Banana", "O Pequeno Principe"]
livrosC = ["Mazer Runner", "Odisseia by Homero", "Iliada by Homero"]

let catalogo = [...livrosP, ...livrosC]
document.write(catalogo)