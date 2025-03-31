const podeTirarCNH = () => {

    let idade = parseInt(window.prompt('Digite sua idade:'));

    if (idade >= 18) {
        document.write('Pode tirar carteira de motorista');
    } else {
        document.write('Não pode tirar carteira de motorista');
    }
    
};

podeTirarCNH();