/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, 
com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
 se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Lívia Borges Matos N° 19
*/

const teclado = require('prompt-sync')();

let num1 = parseInt(teclado('Digite o primeiro número: '));
let num2 = parseInt(teclado('Digite o segundo número: '));

if (num1 > num2) {
    console.log(`O número maior é ${num1} e o número menor é ${num2}`);
} else if (num2 > num1) {
    console.log(`O número maior é ${num2} e o número menor é ${num1}`);
} else {
    console.log(`Os números ${num1} e ${num2} são iguais`);
}