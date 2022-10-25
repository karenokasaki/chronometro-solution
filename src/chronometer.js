class Chronometer {
  constructor() {
    this.currentTime = 0; // Meus segundos
    this.intervalId = null; // Id do setInterval (linha 8)
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      //todo código aqui dentro será executado a cada 1 segundo

      this.currentTime++; //incrementa o tempo de 1 em 1 segundo

      //essa callback é a funçao: printTime() (linha 14 index.js)
      // esse if só precisa estar aqui por causa dos testes.
      // existe dois dos testes que não passa essa callback, por isso é precisa checar se ela é passada ou não
      // a função funciona normalmente sem esse if (porque nós sempre passamos a callback) invocando diretamente a função, mas não passa nos testes
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    /* 
    exemplo: se o cronomêtro está em 100 segundos
    depois de dividir por 60 segundos e arredondar para baixo
    sabemos os minutos

    exemplo: 100 segundos -> 1 minuto
    essa função retorna: 1
    */
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    /* 
    exemplo: se o cronômetro está em 100 segundos
    usamos o remainder operator para tentar dividir os 100 segundos por 60segundos (que é 1 minuto)
    o que sobrar dessa conta são os segundos que passaram de 1min
    ou seja: 100 segundos % 60 = 40 segundos 

    exemplo: 100 segundos -> 40 segundos
    essa função retorna: 40
    */
    return seconds;
  }

  computeTwoDigitNumber(value) {
    /* 
    o valor que essa função recebe como argumento é o valor de retorno das funções: getMinutes() e getSeconds().
    Esses valores podem estar com apenas UM dígito. ex: 4 
    mas precisamos computar esse valor para ficar assim: 04 
    pois nosso cronometro sempre precisa de 2 dígitos.

    Então se o valor for menor que 10 (ou seja, tiver apenas um dígito)
    vamos concatenar uma string colocando o 0 na frente.
    */

    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    //limpa o intervalId que foi guardado nessa propriedade no momento do start
    clearInterval(this.intervalId);
  }

  reset() {
    // reseta o valor do currentTime para 0
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}
