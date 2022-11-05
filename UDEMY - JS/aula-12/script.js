// EXERCÍCIO: RESULTADO DE B TEM QUE SER IGUAL A, O B TEM QUE SER IGUAL A C E O C TEM QUE SER IGUAL A.

let varA = 'A'; //B
let varMae = varA;
let varB = 'B'; //C
let varC = 'C'; //A

varA = varB;
varB = varC;
varC = varMae;

console.log(varA, varB, varC)