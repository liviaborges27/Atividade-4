/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, 
sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, 
utilize a fórmula VOLUME = PI * RAIO² *ALTURA.

Nome: Lívia Borges Matos N° 19
*/

console.log(`---------------------`);
console.log(` Calcule o valor de uma lata`);
console.log(`---------------------`);

const PI:number = 3.14159;
const teclado = require('prompt-sync')();

let altura:number = parseFloat(teclado('Digite o valor da altura: '));
let raio:number = parseFloat(teclado('Digite o valor do raio: '));

const volume:number = PI * altura * raio**2;

console.log(`O volume da lata é: ${volume}`); 