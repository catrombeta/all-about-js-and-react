const data = new Date();
let diaSemana = data.getDay();
diaSemana = 7;
let weekDayText;

// if (diaSemana === 0) {
//     weekDayText = 'Domingo';
// } else if (diaSemana === 1) {
//     weekDayText = 'Segunda Feira';
// } else if (diaSemana === 2) {
//     weekDayText = 'Terça Feira'
// } else if (diaSemana === 3) {
//     weekDayText = 'Quarta Feira';
// } else if (diaSemana === 4) {
//     weekDayText = 'Quinta Feira';
// } else if (diaSemana === 5) {
//     weekDayText = 'Sexta Feira';
// } else if (diaSemana === 6) {
//     weekDayText = 'Sábado';
// } else {
//     weekDayText = 'Não há nenhum dia correspondente com a pesquisa';
// }

switch (diaSemana) {
case 0:
    weekDayText = 'Domingo';
    break;
case 1:
    weekDayText = 'Segunda';
    break;
case 2:
    weekDayText = 'Terça';
    break;
case 3:
    weekDayText = 'Quarta';
    break;
case 4:
    weekDayText = 'Quinta';
    break;
case 5:
    weekDayText = 'Sexta';
    break;
case 6:
    weekDayText = 'Sábado';
    break;
default:
    weekDayText = 'Não há valor para a pesquisa'
    break; // não é necessário no default
}

console.log(diaSemana, weekDayText);