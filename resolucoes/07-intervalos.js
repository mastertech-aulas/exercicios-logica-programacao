//  EXERCÍCIO 01
//   Escreva um programa que utiliza o conteúdo da variável frase e coloca cada uma de suas letras em uma linha do console, com um intervalo de 1 segundo entreo aparecimento de cada letra.

let frase = prompt("Digite a sua frase");

for(let letra of frase){
    setInterval(() => {
        console.log(letra);
    }, 1000);
}