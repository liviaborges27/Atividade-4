/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
  e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas,
   calcule e escreva o valor total da compra.

Nome Aluno: Lívia Borges Matos
E-mail: livia.matos2721@gmail.com
*/

const teclado = require('prompt-sync')();

let macas = parseInt(teclado('Digite a quantidade de maçãs compradas: '));
let preco: number = 0; 

if (macas < 12) {
    preco = macas * 0.30;
} else {
    preco = macas * 0.25;
}

console.log(`O valor total da compra é R$ ${preco}`);