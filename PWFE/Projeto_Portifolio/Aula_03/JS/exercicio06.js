const converterHorasParaMinutos = () => {

    let horas = parseFloat(window.prompt('Digite a quantidade de horas:'));

    document.write(`${horas} horas equivalem a ${horas * 60} minutos.`);
};

converterHorasParaMinutos();