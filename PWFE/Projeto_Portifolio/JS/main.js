document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os cards
    const cards = document.querySelectorAll(".lessons_container");

    // Adiciona o evento de clique para cada card
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const aula = this.getAttribute("data-aula"); // Obtém o valor do atributo
            window.location.href = `${aula}/index.html`; // Redireciona para a pasta da aula
        });
    });
});
