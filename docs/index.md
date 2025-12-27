# Documentação de `index.html`

## Visão Geral

O arquivo `index.html` é o ponto de entrada principal para a aplicação web do jogo Snake. Ele define a estrutura básica da página, incluindo a vinculação à folha de estilos CSS e a importação do script JavaScript principal que inicializa o jogo. Este arquivo é o que o navegador carrega para exibir o jogo ao usuário.

## Estrutura do HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <link rel="stylesheet" href="src/style/style.css">
</head>
<body>
    <div class="game-header">
        <h4 id="score-display">Score: 0</h4>
        <h1>Snake Game</h1>
        <button id="mute-button" style="background-color: transparent; border: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" fill="currentColor"
                class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                <path
                    d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                <path
                    d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                <path
                    d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
            </svg>
        </button>
    </div>
    <div id="game-board"></div>

    <audio id="background-music" src="./public/mp3/Budapest Art Orchestra - Swan Lake Op20 Act 1  No9.mp3" preload="auto" loop></audio>
    <script type="module" src="src/js/script.js"></script>
</body>
</html>
```

### `<!DOCTYPE html>`

Declara o tipo de documento como HTML5.

### `<html lang="en">`

O elemento raiz de uma página HTML. O atributo `lang="en"` especifica que o idioma principal do documento é o inglês. (Poderia ser alterado para `pt-br` se o conteúdo da página fosse em português).

### `<head>`

Contém metadados sobre o documento, que não são exibidos diretamente na página, mas são cruciais para o navegador e os motores de busca.

-   `<meta charset="UTF-8">`: Define a codificação de caracteres para o documento como UTF-8, o que garante a correta exibição de uma ampla gama de caracteres.
-   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configura a viewport da página, crucial para a responsividade em diferentes dispositivos. Define a largura da viewport para a largura do dispositivo e o zoom inicial para 1.0.
-   `<title>Snake Game</title>`: Define o título da página, que aparece na barra de título do navegador ou na aba da página.
-   `<link rel="stylesheet" href="src/style/style.css">`: Vincula a folha de estilos CSS externa (`style.css`) ao documento HTML. O atributo `href` aponta para o caminho do arquivo CSS (`src/style/style.css`).

### `<body>`

Contém todo o conteúdo visível da página web.

-   `<div class="game-header">`: Um contêiner flexível para organizar os elementos no topo da página.
    -   `<h4 id="score-display">Score: 0</h4>`: Exibe a pontuação atual do jogador. O JavaScript irá atualizar o texto deste elemento.
    -   `<h1>Snake Game</h1>`: O título principal do jogo.
    -   `<button id="mute-button">`: Botão para mutar/desmutar a música de fundo, contendo o ícone SVG.
-   `<div id="game-board">`: Este é o elemento principal onde o jogo Snake será renderizado.
-   `<audio id="background-music" src="./public/mp3/Budapest Art Orchestra - Swan Lake Op20 Act 1  No9.mp3" preload="auto" loop></audio>`: Elemento de áudio para a música de fundo. `preload="auto"` permite que o navegador decida o pré-carregamento e `loop` garante que a música se repita.
-   `<script type="module" src="src/js/script.js"></script>`: Inclui o arquivo JavaScript principal que inicializa a lógica do jogo. O atributo `type="module"` é usado para suportar importações e exportações de módulos ES6.
