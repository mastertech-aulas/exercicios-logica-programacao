// EXERCÍCIO 01
//  Crie um programa que utiliza os números ímpares encontrados entre numeroInicial e numeroFinal e realiza a soma entre eles.
  
//   **Ex:** `numeroInicial = 2 | numeroFinal = 11 | impares entre numeroInicial e numeroFinal = 3, 5, 7, 9, 11 | Resultado da soma = 35`




//  EXERCÍCIO 02
//   Crie um programa que some todos os números armazenados em um vetor.

let numeros = [1, 2, 3, 4, 5, 6];
let resultadoSoma = 0;
for(let numero of numeros){
    resultadoSoma += numero;
}
console.log(resultadoSoma);

//  EXERCÍCIO 03
//   Crie um programa que some todos os números pares de um vetor.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoSoma = 0;

for(let numero of numeros){
    if(numero % 2==0){
        resultadoSoma += numero;
    }
}
console.log(resultadoSoma);

//  EXERCÍCIO 04
//   Crie um programa que mostre o resultado da soma dos números pares e da soma dos números ímpares de um vetor, separadamente.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoSomaPar = 0;
let resultadoSomaImpar = 0;

for(let numero of numeros){
    if(numero % 2==0){
        resultadoSomaPar += numero;
    }
    else{
        resultadoSomaImpar += numero;
    }
}
console.log(`A soma dos números pares é ${resultadoSomaPar} e a soma dos números ímpares é ${resultadoSomaImpar}`);

// ---
// ### EXERCÍCIO 05
//   Crie uma lista de objetos contendo filmes e suas respectivas classificações. O programa ao receber uma idade armazenada em uma variável, deverá verificar e mostrar no console qual filme o usuário pode assistir.
  
let filmes = [
    {nome: "Deu a loca na Chapeuzinho", classificacao: 17},
    {nome: "Vovozona", classificacao: 12},
    {nome: "KillBill", classificacao: 18},
    {nome: "A fuga das galinhas", classificacao: 0}
];

let idade = prompt("Digite sua idade");
for(let filme of filmes){
    if(idade>=filme.classificacao){
        console.log(`Você pode assistir ao filme: ${filme.nome}`);
    }
}

// EXERCÍCIO 06
// Crie um sistema que recebe cinco valores numéricos do usuário. O sistema deve mostrar qual o maior desses valores.
let total = Number(prompt("Quantos números você quer comparar?"));
let maior = Number(prompt("Qual o primeiro número?"));
let i = 0;

while (i < total) {
    let novoNumero = Number(prompt("Qual o próximo número?"));

    if (novoNumero > maior) {
        maior = novoNumero;
    }
    i++;
}
console.log(`O maior número digitado foi: ${maior}`);

// EXERCÍCIO 07
// Crie um sistema que receba um valor numérico do usuário. O sistema deve mostrar os resultados da tabuada do número digitado até o 10.


// ---
// ### EXERCÍCIO 08
// Crie um sistema que recebe um valor numérico informando quantos lances de escada devem ser criados. Na sequência, desenhe esses lances no console seguindo o exemplo:

// ### EXERCÍCIO 09
// Crie um sistema de convidados para uma festa. Você deve definir no seu código uma lista que contenha vários nomes de convidados para uma festa. Seu sistema deve:

// - Perguntar para o usuário qual o convidado que está tentando entrar;
// - Verificar se o convidado está na lista de convidados e responder ao usuário de acordo;