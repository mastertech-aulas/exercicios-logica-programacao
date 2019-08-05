// ### EXERCÍCIO 01
//   Crie um programa que sorteie um dos valores presentes no vetor escrito abaixo `'valores'` . Repita esse sorteio 3 vezes e verifique se os valores sorteados são iguais.

let frutas = ["maca", "banana", "kiwi", "pera", "laranja", "limao"];

function verificarSorteio(){
    let sorteio1 = Math.floor(Math.random()*frutas.length);
    let sorteio2 = Math.floor(Math.random()*frutas.length);
    let sorteio3 = Math.floor(Math.random()*frutas.length);

    if(frutas[sorteio1] == frutas[sorteio2] && frutas[sorteio2] == frutas[sorteio3]){
        console.log(`Os valores sorteados foram: ${frutas[sorteio1]}, ${frutas[sorteio2]}, ${frutas[sorteio3]}. Você venceu !`);
    }
    else{
        console.log(`Os valores sorteados foram: ${frutas[sorteio1]}, ${frutas[sorteio2]}, ${frutas[sorteio3]}. Você perdeu !`);
    }
}

verificarSorteio();


//  EXERCÍCIO 02 
// Crie um programa que simule um ataque do meuPokemon contra o pokemonInimigo.
// - O ataque de um pokemon pode causar de 1 à 100 pontos de dano. Caso o elemento do meuPokemon seja forte contra o elemento do pokemonInimigo,
// o ataque recebe um bônus de 25%.

// Use a seguinte referência
// - Raio é forte contra água
// - Água é forte contra fogo
// - Fogo é forte contra planta
// - Planta é forte contra raio

// O programa deve determinar quanto foi o dano causado e se o pokemon inimigo foi derrotado (hp 0 ou menor)

// `let tipos = ['raio', 'água', 'fogo', 'planta'];`

// `let meuPokemon = {`
//   `nome: 'Pikachu',`
//   `tipo: tipos[0],`
//   `hp: 100`
// `}`

// `let pokemonInimigo = {`
//   `nome: 'Charmander',`
//   `tipo: tipos[2],`
//   `hp: 100`
// `}`