let num1, num2, resultado

num1 = Number(prompt("Digite um numero: "))
num2 = Number(prompt("Digite outro numero: "))

resultado = num1 - num2

if(resultado < 0){
    resultado = resultado * (-1)
    console.log(resultado)
    document.write(`A diferença entre os numeros é: ${resultado}`)
} else {
    document.write(`A diferença entre os numeros é: ${resultado}`)
}