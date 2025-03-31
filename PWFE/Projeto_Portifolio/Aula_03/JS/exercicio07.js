const calcularCedulas = () => {
    let valor = window.prompt("Insira o valor que deseja calcular")
    let cedulas = [200, 100, 50, 20, 10, 5, 1]
    let resultado = {}
    
    for (let cedula of cedulas) {
        resultado[cedula] = Math.floor(valor / cedula)
        valor %= cedula
    }

    document.querySelector('.main_container').innerHTML = `<h1>A Quantidade de cedulas é: ${resultado}</h1>`
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".lessons_container")

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const aula = this.getAttribute("data-aula")
            window.location.href = `../${aula}/index.html`
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const iconHome = document.querySelector(".icon_home")

    iconHome.addEventListener("click", function () {
        window.location.href = "../index.html"
    })
})

calcularCedulas()