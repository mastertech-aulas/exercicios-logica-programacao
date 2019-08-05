// ### EXERCÍCIO 01
//  Crie um programa que utilize as 3 dimensões de uma piscina para calcular quantos litros de água ela comporta em litros. Imprima apenas o resultado no console. 

let profundidade = 2;
let comprimento = 10;
let largura = 5;

let volume = comprimento * largura * profundidade;

console.log(`Uma piscina com o comprimento de ${comprimento} metros, largura de ${largura} metros e profundidade de ${profundidade} metros tem ${volume} metros cúbicos.`);


// ### EXERCÍCIO 02
// Crie um programa para tratar o resultado de uma forma amigável

// Conversão de metros cúbicos em litros: multiplicar cada metro cúbico por 1000
let litros = volume * 1000;
console.log(`A piscina comporta ${litros} litros`);
 