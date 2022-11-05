// ARRAYS: são indexados por elementos, ou seja, Carol é 0, Mariana é 1, Otávio é 2. Array é um objeto INDEXADO

const alunos = ['Carol', 'Mariana', 'Otavio'];
alunos.push('Azul');
alunos.unshift('Vermelho');
console.log(alunos);
// console.log(alunos[0]); // EXIBI APENAS O ZERO QUE É CAROL
alunos.pop(); // REMOVE O ÚLTIMO ELEMENTO
console.log(alunos);
alunos.shift(); // REMOVE O PRIMEIRO ELEMENTO
console.log(alunos);
delete alunos[1];
console.log(alunos);
console.log(alunos[1]); //vai dar undefined, pois foi removido o índice 1. O índice fica vazio/empty

