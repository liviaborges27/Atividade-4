/*4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Lívia Borges Matos N° 19
*/


const teclado = require('prompt-sync')();

let num1: number = parseInt(teclado('Digite um número: '));
let num2: number = parseInt(teclado('Digite o segundo número: '));
let num3: number = parseInt(teclado('Digite o terceiro número: '));

if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        console.log(`A ordem crescente é: ${num1}, ${num2}, ${num3}`);
    } else {
        console.log(`A ordem crescente é: ${num1}, ${num3}, ${num2}`);
    }
} else if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
        console.log(`A ordem crescente é: ${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`A ordem crescente é: ${num2}, ${num3}, ${num1}`);
    }
} else 
    if (num1 < num2) {
        console.log(`A ordem crescente é: ${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`A ordem crescente é: ${num3}, ${num2}, ${num1}`);
    }