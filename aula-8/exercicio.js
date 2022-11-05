const nome = 'Caroline Campos Trombeta';
let idade = 30;
let peso = 75;
let alturaEmM = 1.56;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - 30;

console.log(
    nome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + alturaEmM + ' e seu IMC é de ' + imc
); // eu também poderia ter colocado em vírgula e no caso da utilização do + eu estou UNINDO os dados
console.log(
    nome, 'nasceu em', anoNascimento
);

// TEMPLATE STRINGS: forma mais legível e mais simples e mais moderna

console.log(
    `tem de ${alturaEmM} e seu IMC é de ${imc}`
);