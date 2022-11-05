let num1 = window.prompt('Digite um número');
num1 = parseFloat(num1);

let num2 = window.prompt('Digite um número');
num2 = parseFloat(num2);

const resultadoDeSoma = num1 + num2;

// alert('O resultado da conta foi de ' + resultadoDeSoma); - foi o que eu fiz, mas fica mais profissional assim:

alert(`O resultado da conta foi: ${resultadoDeSoma}`); // nesse caso eu poderia ter colocado a expressão de resultado diretamente dentro das chaves!!!