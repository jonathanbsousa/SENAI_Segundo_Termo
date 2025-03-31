const inverterString = () => {
    
    let str = window.prompt('Digite uma string para inverter:');

    document.write(`String invertida: ${str.split('').reverse().join('')}`);
};

inverterString();