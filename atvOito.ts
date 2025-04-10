/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo
 e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Lívia Borges Matos
E-mail: livia.mato2721@gmail.com
*/

const teclado = require('prompt-sync')();
console.log("Digite os valores dos ângulos do triângulo: ");
let anguloUm = parseInt(teclado("Digite o primeiro ângulo: "));
let anguloDois = parseInt(teclado("Digite o segundo ângulo: "));
let anguloTres = parseInt(teclado("Digite o terceiro ângulo: "));

let somaAngulos = anguloUm + anguloDois + anguloTres;
if(somaAngulos == 180) { 

    if(anguloUm == 90 || anguloDois == 90 || anguloTres == 90) {
        console.log("Triângulo Retângulo");
    } else if(anguloUm > 90 || anguloDois > 90 || anguloTres > 90) {
        console.log("Triângulo Obtusângulo");
    } else {
        console.log("Triângulo Acutângulo");
    }
} else 
    console.log("Os ângulos informados não formam um triângulo.");