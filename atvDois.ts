/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene
 na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.

Nome Aluno: Lívia Borges Matos N° 19
*/


const teclado = require('prompt-sync')();

let x:number = parseInt(teclado('Digite um número: '));
let y:number  = parseInt(teclado('Digite outro número: '));

console.log(`Os números digitados foram: ${x} e ${y}`);

let numtemp: number = x;
x = y; 
y = numtemp; 

console.log(`Os números trocados são ${x} e ${y}`); 