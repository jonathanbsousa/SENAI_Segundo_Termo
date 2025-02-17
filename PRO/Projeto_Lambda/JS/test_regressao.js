const { Builder, By, until } = require('selenium-webdriver');

// Credenciais do LambdaTest
const username = 'jonathanbsousa55';
const accessKey = 'LT_MKtdHGIPvwxpcCyrtiop0NFdZd1Yv6FpL29XgGG2afXGJZX';

// Configuração do LambdaTest
const gridUrl = 'https://' + username + ':' + accessKey + '@hub.lambdatest.com/wd/hub';

(async function example() {
  // Configurações do navegador
  let capabilities = {
    platform: 'Windows 10',
    browserName: 'Chrome',
    version: 'latest',
    resolution: '1024x768',
    name: 'Teste de Regressão',
    build: 'Build 1',
    network: true,
    visual: true,
    console: true,
    selenium_version: '4.0.0',
  };

  // Inicializa o WebDriver
  let driver = await new Builder()
    .usingServer(gridUrl)
    .withCapabilities(capabilities)
    .build();

  try {
    // Navega até o site
    await driver.get('https://exemplo.com');

    // Aguarda o carregamento do elemento
    let elemento = await driver.wait(until.elementLocated(By.css('h1')), 10000);

    // Verifica se o elemento está presente
    let texto = await elemento.getText();
    if (texto) {
      console.log('Teste passou! Elemento encontrado com o texto:', texto);
    } else {
      console.log('Erro: Elemento não encontrado ou sem texto.');
    }
  } finally {
    // Encerra o WebDriver
    await driver.quit();
  }
})();
