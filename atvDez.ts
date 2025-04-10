/* 10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

Aluno: Lívia Borges Matos N° 19
*/

const teclado = require('prompt-sync')(); 
let respostas = 0; 

console.log("Responda as perguntas abaixo com 'sim' ou 'não'");
let pergunta1 = teclado("Telefonou para a vítima? ");
if(pergunta1 == "sim"){
    respostas++;
};
let pergunta2 = teclado("Esteve no local do crime? ");
if(pergunta2 == "sim"){
    respostas++;
};
let pergunta3 = teclado("Mora perto da vítima? ");
if(pergunta3 == "sim"){
    respostas++;
};
let pergunta4 = teclado("Devia para a vítima? ");
if(pergunta4 == "sim"){
    respostas++;
};
let pergunta5 = teclado("Já trabalhou com a vítima? ");
if(pergunta5 == "sim"){
    respostas++;
}; 

if(respostas == 2){
    console.log("Suspeita");
}else if(respostas == 3 || respostas == 4){
    console.log("Cúmplice");
}else if(respostas == 5){
    console.log("Assassino");
}else{
    console.log("Inocente");
}