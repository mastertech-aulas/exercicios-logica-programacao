// ### EXERCÍCIO 01
// Crie um programa para receber um número e informe qual dia da semana ele representa baseado em um `número de 1 à 7`. O número deve ser informado como uma variável.

let numero = prompt(`Digite um número de 1 à 7`);

if(numero == 1){
    console.log(`O dia ${numero} é DOMINGO`);
}
else if(numero == 2){
    console.log(`O dia ${numero} é SEGUNDA FEIRA`);
}
else if(numero == 3){
    console.log(`O dia ${numero} é TERÇA FEIRA`);
}
else if(numero == 4){
    console.log(`O dia ${numero} é QUARTA FEIRA`);
}
else if(numero == 5){
    console.log(`O dia ${numero} é QUINTA FEIRA`);
}
else if(numero == 6){
    console.log(`O dia ${numero} é SEXTA FEIRA`);
}
else if(numero == 7){
    console.log(`O dia ${numero} é SÁBADO`);
}
else{
    console.log(`O número ${numero} é inválido, digite um número de 1 à 7`);
}


// ### EXERCÍCIO 02
// Crie um programa que determina se um número é par ou ímpar.
// O número deve ser informado através de uma variável.

let numero = prompt("Digite um número para descobrir se é par ou ímpar");

if(numero  % 2 === 0){
    console.log(`O número ${numero} é par`);
}
else{
    console.log(`O número ${numero} é ímpar`);
}