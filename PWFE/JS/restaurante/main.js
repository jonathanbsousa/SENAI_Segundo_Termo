function CalcularTotal(){
    let preco_prato = parseFloat(document.getElementById('prato').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if(preco_prato === 0 || quantidade < 0){
        alert("Deu ruim")
        document.getElementById('resultado').textContent = "Verifique as Seleções"
    } else {
        let total = preco_prato * quantidade
        document.getElementById('resultado').textContent = `O valor total é de ${total}`
    }
}