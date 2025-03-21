let peso, altura, imc

peso = Number(prompt("Digite seu peso"))
altura = Number(prompt("Digite sua altura"))

imc = peso / (altura * altura)

if(imc >= 40){
    document.write(`IMC: ${imc} \nClassificação: Obessidade Grave`)
} else if(imc >= 30){
    document.write(`IMC: ${imc} \nClassificação: Obesidade`)
} else if(imc >= 25){
    document.write(`IMC: ${imc} \nClassificação: Sobrepeso`)
} else if(imc >= 18.5){
    document.write(`IMC: ${imc} \nClassificação: Normal`)
} else {
    document.write(`IMC: ${imc} \nClassificação: Magreza`)
}