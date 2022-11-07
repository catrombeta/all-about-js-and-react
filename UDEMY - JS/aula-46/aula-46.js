// SETINTERVAL

function showHour() {
    let data = new Date();

    return data.toLocaleTimeString('pt-PT', {
        hour12: false
    });
}

// setInterval(function() {
//     console.log(showHour()); 
// }, 1000);

// PARA PARAR A EXECUÇÃO DA FUNÇÃO BASTA FAZER CTRL ALT M!!!!
// TAMBÉM POSSO UTILIZAR A FUNÇÃO SETTIMEOUT

const timer = setInterval(function () {
    console.log(showHour());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log('Olá mundo!');
}, 5000);

