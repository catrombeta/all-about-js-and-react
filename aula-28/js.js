// const data = new Date('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // 0 é janeiro e 11 é dezembro
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Dia semana', data.getDay()); // 0 é domingo e 6 é sábado
// console.log(data.toString(0));

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroLeft(data.getDate());
    const mes = zeroLeft(data.getMonth() +1);
    const ano = zeroLeft(data.getFullYear());
    const hora = zeroLeft(data.getHours());
    const minuto = zeroLeft(data.getMinutes());
    const segundo = zeroLeft(data.getSeconds());
    const milesimos = zeroLeft(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataPortugal = formataData(data);
console.log(dataPortugal);