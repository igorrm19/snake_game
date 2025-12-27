# Documentação de `style.css`

## Visão Geral

O arquivo `style.css` contém todas as regras de estilo para a interface do jogo Snake. Ele define a aparência geral da página, o layout do tabuleiro do jogo usando CSS Grid, e as cores e tamanhos dos elementos da cobra e da comida. O objetivo é fornecer uma experiência visual consistente e agradável para o usuário. Esta versão foi atualizada para incluir o layout do cabeçalho do jogo com a pontuação e o botão de mutar.

## Estilos Globais (`body`)

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    min-height: 100vh;
    margin: 0;
    background-image: url('../../public/6c479787d54fe73436b82e56ed99885e.gif');
    background-position: center;
    background-repeat: repeat;
    color: #eee;
    font-family: 'Press Start 2P', cursive;
}
```

-   `display: flex;`, `flex-direction: column;`, `align-items: center;`, `justify-content: center;`: Centraliza o conteúdo horizontal e verticalmente na viewport.
-   `min-height: 100vh;`: Garante que o corpo da página ocupe pelo menos 100% da altura da viewport.
-   `margin: 0;`: Remove a margem padrão do corpo.
-   `background-image`, `background-position`, `background-repeat`: Configuram a imagem de fundo para o corpo da página.
-   `color: #eee;`: Define a cor do texto para um cinza claro.
-   `font-family: 'Press Start 2P', cursive;`: Define uma fonte pixelizada para o jogo.

## Estilo do Cabeçalho do Jogo (`.game-header`)

```css
.game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90vw; /* Adapta-se à largura da viewport */
    width: 625px; /* Mesma largura do game-board */
    padding: 10px 0;
    margin-bottom: 20px;
}
```

-   `display: flex;`, `justify-content: space-between;`, `align-items: center;`: Cria um layout flexível para o cabeçalho, distribuindo os itens (pontuação, título, botão de mute) igualmente e alinhando-os verticalmente ao centro.
-   `max-width: 90vw;`: Garante que o cabeçalho não exceda 90% da largura da viewport em telas menores.
-   `width: 625px;`: Define a largura base do cabeçalho para corresponder ao tabuleiro do jogo.\n-   `padding` e `margin-bottom`: Adicionam espaçamento.

### Estilo do Título (`.game-header h1`)

```css
.game-header h1 {
    margin: 0; /* Remove margem padrão do h1 dentro do header */
}
```

-   `margin: 0;`: Remove a margem padrão do título dentro do cabeçalho.

### Estilo da Pontuação (`#score-display`)

```css
#score-display {
    font-size: 1.2em;
    margin: 0;
}
```

-   `font-size` e `margin`: Define o tamanho da fonte e remove a margem padrão para a exibição da pontuação.

### Estilo do Botão de Mute (`#mute-button`)

```css
#mute-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

#mute-button svg {
    fill: white; /* Garante que o SVG seja branco por padrão */
}

#mute-button:hover svg {
    fill: #ccc; /* Um leve escurecimento no hover para feedback visual */
}
```

-   Estilos para o botão de mutar, tornando-o transparente e sem bordas. O SVG dentro do botão é preenchido com branco e ligeiramente escurecido no hover para feedback visual.

## Estilo do Tabuleiro do Jogo (`#game-board`)

```css
#game-board {
    display: grid;
    grid-template-columns: repeat(25, 1fr);
    grid-template-rows: repeat(25, 1fr);
    max-width: 90vw;
    max-height: 90vh;
    width: min(625px, 90vw); /* Ajusta a largura com base na viewport */
    height: min(625px, 90vh); /* Ajusta a altura com base na viewport */
    background-color: #333;
    border: 5px solid #555;
}
```

-   `display: grid;`: Habilita o layout de grade para o tabuleiro do jogo.
-   `grid-template-columns: repeat(25, 1fr);` e `grid-template-rows: repeat(25, 1fr);`: Cria uma grade de 25x25 células, onde cada célula ocupa uma fração igual do espaço disponível, tornando a grade responsiva.
-   `max-width: 90vw;` e `max-height: 90vh;`: Definem o tamanho máximo do tabuleiro para não exceder 90% da largura/altura da viewport.
-   `width: min(625px, 90vw);` e `height: min(625px, 90vh);`: Definem a largura e altura do tabuleiro, pegando o menor valor entre um tamanho fixo (625px) e 90% da largura/altura da viewport. Isso garante que o tabuleiro seja responsivo, mas não menor que um tamanho mínimo (implícito pelo max-width/height).
-   `background-color: #333;` e `border`: Estilização visual do tabuleiro.

## Estilo da Cobra (`.snake`)

```css
.snake {
    background-color: #0f0;
}
```

-   `background-color: #0f0;`: Define a cor verde para os segmentos da cobra.

## Estilo da Comida (`.food`)

```css
.food {
    background-color: #f00;
}
```

-   `background-color: #f00;`: Define a cor vermelha para o item de comida.

## Como Funciona

Este arquivo CSS define a apresentação visual do jogo, agora com um cabeçalho organizado que exibe a pontuação e o controle de música. Ele usa Flexbox para o cabeçalho e CSS Grid para o tabuleiro do jogo, garantindo que os elementos da interface sejam bem posicionados e estilizados.
