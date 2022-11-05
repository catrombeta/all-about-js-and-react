/* 

OBJETO MATH: não esquecer que a primeira letra de Math tem que ser escrita em maiúsculo porque se não não reconhece o objeto e pode achar que é uma função



*/


let num1 = 9.88461;
let num2 = Math.floor(num1); //arredonda para baixo
let num3 = Math.ceil(num1); // arredonda para cima
let num4 = Math.round(num1); // arredonda para o mais próximo
console.log(num2);
console.log(num3);
console.log(num4);
console.log(Math.max(1,90,80,1500,1)); // traz o maior número da sequência
console.log(Math.min(1,90,80,1500,-1)); // traz o menor número da sequência
console.log(Math.random()*12); // traz um número aleatório até 11.9

const aleatorio = Math.random() * (10 - 5) + 5; // entre 10 e 5
console.log(aleatorio);

let num5 = 10;
console.log(num5 ** num5);


