const validarFormulario = () => {
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let telefone = document.getElementById('telefone').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    
    if (!nome || !endereco || !sexo || !telefone || !celular || !email) {
        document.write('Todos os campos devem ser preenchidos!');
        return false;
    }

    document.write('Formulário enviado com sucesso!');
    return true;
};