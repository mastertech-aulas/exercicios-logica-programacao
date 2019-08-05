// EXERCÍCIO 01
//  Escreva uma função que receba dois números inteiros e determine se o primeiro é divisível pelo segundo, retornando um booleano. 
  
function verificarDivisao(num1, num2){
    if(num1 % num2 == 0){
        console.log(`É divisível? -  ${true}`);
    }
    else{
        console.log(`É divisível? - ${false}`);
    }
}

let numero1 = prompt("Digite o primeiro número");
let numero2 = prompt("Digite o segundo número");
verificarDivisao(numero1, numero2);

//EXERCÍCIO 02
//  Crie uma função que recebe um número inteiro e retorna um booleano, determinando se ele é primo.

function verificarPrimo(numero){
    if((numero/numero)==1 && (numero/1)==numero && (numero % 2) != 0 && (numero %3)!=0){
        console.log(`O número é um número primo? - ${true}`)
    }
    else{
        console.log(`O número é um número primo? - ${false}`)
    }
}

let num = parseInt(prompt("Digite um número inteiro para descobrir se é primo"));
verificarPrimo(num);


//EXERCÍCIO 03
//  Crie um programa que determina se a string contida na variável palavra é um palíndromo. Palíndromos são palavras que podem ser invertidas sem alterar sua ortografia.

// function verificarPalindromo(palavra){
//     let string = palavra;
//     if(string.reverse() === string){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// verificarPalindromo("ovo");

// const testes = ["reviver", "luz azul", "radar", "manhã"];

// const checkPalindrome = str => {
//     str === str.split('').reverse().join('');
// }
// const resultados = testes.map(checkPalindrome);
// console.log(resultados);