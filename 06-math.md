## EXERCÍCIOS MATH
---
### EXERCÍCIO 01
  Crie um programa que sorteie um dos valores presentes no vetor escrito abaixo `'valores'` . Repita esse sorteio 3 vezes e verifique se os valores sorteados são iguais.
  Caso sejam, o jogador venceu o jogo.
  
  ***Vetor*** `let valores = ['maçã', 'banana', 'pera', '7'];`
  
**Ex:** 
`Os valores sorteados foram banana, banana e pera. Você perdeu!`
`Os valores sorteados foram banana, banana e banana. Você venceu!`


---
### EXERCÍCIO 02 
Crie um programa que simule um ataque do meuPokemon contra o pokemonInimigo.
- O ataque de um pokemon pode causar de 1 à 100 pontos de dano. Caso o elemento do meuPokemon seja forte contra o elemento do pokemonInimigo,
o ataque recebe um bônus de 25%.

Use a seguinte referência
- Raio é forte contra água
- Água é forte contra fogo
- Fogo é forte contra planta
- Planta é forte contra raio

O programa deve determinar quanto foi o dano causado e se o pokemon inimigo foi derrotado (hp 0 ou menor)

`let tipos = ['raio', 'água', 'fogo', 'planta'];`

`let meuPokemon = {`
  `nome: 'Pikachu',`
  `tipo: tipos[0],`
  `hp: 100`
`}`

`let pokemonInimigo = {`
  `nome: 'Charmander',`
  `tipo: tipos[2],`
  `hp: 100`
`}`