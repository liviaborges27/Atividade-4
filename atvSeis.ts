/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno: Lívia Borges Matos N°19
*/

const teclado = require('prompt-sync')();

let notaBimestralUm = parseInt(teclado('Digite a nota do 1° Bimestre: '));
let notaBimestralDois = parseInt(teclado('Digite a nota do 2° Bimestre: '));

let media = (notaBimestralUm + notaBimestralDois) / 2;

if (media >= 8.5 && media <= 10) { 
    console.log('A');
} else if (media >= 7 && media < 8.5) {
    console.log('B');
} else if (media >= 5 && media < 7) {
    console.log('C');
} else if (media >= 3 && media < 5) {
    console.log('D');
} else {
    console.log('E');
}