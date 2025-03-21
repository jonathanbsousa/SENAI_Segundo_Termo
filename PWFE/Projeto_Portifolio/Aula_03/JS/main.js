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