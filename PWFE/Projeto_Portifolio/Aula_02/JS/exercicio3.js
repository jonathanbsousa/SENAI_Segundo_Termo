let num1, num2, resultado

num1 = Number(prompt("Digite um numero:"))
num2 = Number(prompt("Digite outro numero:"))

if(num1 % num2 == 0){
    document.write(`O numero ${num1} é multiplo de ${num2}`)
} else {
    document.write(`O numero ${num1} não é multiplo de ${num2}`)
}