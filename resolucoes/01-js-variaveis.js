// EXERCÍCIO 01
// Crie um vetor que possui o nome dos seus 5 artistas favoritos. Imprima no console o nome do 1o e do 3o artista da lista.
// Ex: Michael Jackson Billy Corgan

let artistas = ["Michael Jackson", "Billy Corgan", "Brad Pitt", "Jared Leto", "Nicki Minaj"];

console.log(artistas[0], artistas[2])

// EXERCÍCIO 02
// Crie um objeto que represente seu personagem favorito. Use atributos como nome, idade, altura, série/filme/quadrinho/gameque ele pertence, habilidade, etc.
// Imprima no console uma frase usando alguns de seus atributos.
// Ex: Meu personagem favorito é o Goku e ele é um Sayajin.

let personagem = {
  nome: "Goku",
  idade: "44 anos",
  peso: "62 kg",
  altura: "175 cm",
  habilidade: "Sayajin",
  desenho: "Dragon Ball"
}

console.log(`Meu personagem favorito é o ${personagem.nome}, ele é um ${personagem.habilidade}.`)
