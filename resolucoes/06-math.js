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