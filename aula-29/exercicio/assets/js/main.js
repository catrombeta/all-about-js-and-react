const p = document.querySelector('.container p');
const date = new Date();

const weekDay = date.getDay();
const dia = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

let weekDayText;

switch (weekDay) {
    case 0: weekDayText = 'Domingo';
    break;
    case 1: weekDayText = 'Segunda-Feira';
    break;
    case 2: weekDayText = 'Terça-Feira';
    break;
    case 3: weekDayText = 'Quarta-Feira';
    break;
    case 4: weekDayText = 'Quinta-Feira';
    break;
    case 5: weekDayText = 'Sexta-Feira';
    break;
    case 6: weekDayText = 'Sábado';
    break;
    default: weekDayText = 'Não há valor para este dia';
}

let monthText;

switch (month) {
    case 0: monthText = 'Janeiro';
    break;
    case 1: monthText = 'Fevereiro';
    break;
    case 2: monthText = 'Março';
    break;
    case 3: monthText = 'Abril';
    break;
    case 4: monthText = 'Maio';
    break;
    case 5: monthText = 'Junho';
    break;
    case 6: monthText = 'Julho';
    break;
    case 7: monthText = 'Agosto';
    break;
    case 8: monthText = 'Setembro';
    break;
    case 9: monthText = 'Outubro';
    break;
    case 10: monthText = 'Novembro';
    break;
    case 11: monthText = 'Dezembro';
    break;
    default: monthText = 'Não há valor para este dia';
}

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
}


p.innerHTML = `<b>${weekDayText}, ${dia} de ${monthText} de ${year} <br/> ${(zeroLeft(hour))}: ${(zeroLeft(minute))}: ${(zeroLeft(second))}</b>`;




