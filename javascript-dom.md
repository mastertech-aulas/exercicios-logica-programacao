EXERCÍCIO 1
---
Criar uma página HTML que contenha um quadrado e três botões. O quadrado deve estar formatado com uma borda e ter lados de 300px. Os botões devem, ao clicar:
- Botão 1: Pintar o quadrado de vermelho;
- Botão 2: Remover a borda bo quadrado;
- Botão 3: Igualar a largura do quadrado à largura da página;
- Faça cada um dos botões aplicarem seus respectivos efeitos quando clicados, e removerem esses efeitos se clicados novamente;
- Faça as transições serem animadas;

EXERCÍCIO 2
---
Faça um quadrado na tela de lados equivalentes a 300px.
- Se o quadrado estiver visível e for clicado, ele deverá sumir;
- Se o quadrado estiver invisível e for clicado, ele deverá aparecer;

EXERCÍCIO 3
---
Você deve criar três formas geométricas: um quadrado, um círculo e um triângulo.
- Faça com que somente uma forma geométrica seja exibida por vez;
- A cada 0.5 segundos, essa forma geométrica deve tornar-se a próxima da lista;
- Cada forma geométrica deve ter seu respectivo nome abaixo;

EXERCÍCIO 4
---
Crie uma lista vazia no seu documento HTML e crie uma variável no JS com a seguinte lista:
~~~
const convidados = [
    {nome: "Bob Sponja", idade: 20},
    {nome: "Freddie Mercury", idade: 42},
    {nome: "James Bond", idade: 50},
    {nome: "Michael Scott", idade: 46},
    {nome: "Peter Parker", idade: 21},
    {nome: "Dave Mustaine", idade: 62},
    {nome: "Ed Sheeran", idade: 28},
    {nome: "Jon Snow", idade: 16},
    {nome: "Pikachu da Silva", idade: 12}
];
~~~
- Crie cada um dos items da lista do JS na lista do arquivo HTML;
- Ao clicar em um item da lista, seu fundo deve ficar vermelho;
- Ao clicar em um item da lista diferente, qualquer item com o fundo vermelho deve voltar ao normal, e o item clicado deve receber o novo fundo vermelho;

EXERCÍCIO 5
---
Crie uma lista vazia, uma área de input e um botão de pesquisa no seu documento HTML e crie uma variável no JS com a seguinte lista:
~~~
const convidados = [
    {nome: "Bob Sponja", idade: 20},
    {nome: "Freddie Mercury", idade: 42},
    {nome: "James Bond", idade: 50},
    {nome: "Michael Scott", idade: 46},
    {nome: "Peter Parker", idade: 21},
    {nome: "Dave Mustaine", idade: 62},
    {nome: "Ed Sheeran", idade: 28},
    {nome: "Jon Snow", idade: 16},
    {nome: "Pikachu da Silva", idade: 12}
];
~~~
- Ao clicar no botão de pesquisa, você deve capturar o conteúdo do input e buscar os nomes que se encaixem com o conteúdo digitado;
- Só podem ser mostrados na página os nomes que corresponderem à pesquisa feita;
- Quando o conteúdo começar a ser apagado dentro da área de input, a lista completa deve ser mostrada;