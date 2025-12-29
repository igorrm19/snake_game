# Documentação de `gameView.js`

## Visão Geral

A classe `GameView` é responsável por renderizar o estado atual do jogo Snake na interface do usuário (DOM). Ela não contém nenhuma lógica de jogo ou estado do jogo, focando-se puramente na apresentação visual da cobra e da comida no tabuleiro. A `GameView` recebe os dados do `GameModel` e os exibe de acordo com as regras de estilo definidas.

## Classe: `GameView`

### Construtor

`constructor(gameBoardElement, gridSize)`

-   **`gameBoardElement`**: O elemento HTML (geralmente um `div`) que serve como o contêiner principal para o tabuleiro do jogo.
-   **`gridSize`**: O tamanho da grade do jogo (por exemplo, 20x20). Usado para calcular a posição dos elementos na grade CSS.
-   **`playButton`**: Referência ao botão HTML de "Play Game".
-   **`restartButton`**: Referência ao botão HTML de "Restart Game".
-   **`highScoreDisplay`**: Referência ao elemento HTML que exibe a maior pontuação.
-   **`scoreDisplay`**: Referência ao elemento HTML que exibe a pontuação atual.

### Métodos

#### `clearBoard()`

Limpa todo o conteúdo do elemento do tabuleiro do jogo, removendo todos os segmentos de cobra e elementos de comida existentes antes de uma nova renderização.

#### `drawSnake(snake)`

Desenha a cobra no tabuleiro do jogo.
-   **`snake`**: Um array de objetos `{ x, y }`, onde cada objeto representa um segmento da cobra.
-   Para cada segmento, cria um novo elemento `div`, define suas posições de linha e coluna CSS usando `gridRowStart` e `gridColumnStart`, adiciona a classe CSS `snake` para estilização e o anexa ao `gameBoardElement`.

#### `drawFood(food)`

Desenha a comida no tabuleiro do jogo.
-   **`food`**: Um objeto `{ x, y }` representando a posição da comida.
-   Cria um novo elemento `div`, define suas posições de linha e coluna CSS, adiciona a classe CSS `food` para estilização e o anexa ao `gameBoardElement`.

#### `render(snake, food)`

Método principal de renderização que atualiza a exibição do jogo.
-   **`snake`**: O estado atual da cobra (array de segmentos).
-   **`food`**: O estado atual da comida (objeto de posição).
-   Chama `clearBoard()` para limpar a renderização anterior.
-   Chama `drawSnake()` para redesenhar a cobra em sua nova posição.
-   Chama `drawFood()` para redesenhar a comida em sua posição.

#### `displayGameOver()`

Mostra o botão de "Restart Game" e esconde o tabuleiro do jogo, indicando o fim da partida.

#### `displayScore(score, highScore)`

Exibe a pontuação atual e a maior pontuação nos elementos HTML correspondentes.
-   **`score`**: A pontuação atual do jogo.
-   **`highScore`**: A maior pontuação alcançada.

#### `showPlayButton()`

Mostra o botão de "Play Game" e esconde o botão de "Restart Game" e o tabuleiro do jogo.

#### `hidePlayButton()`

Esconde o botão de "Play Game" e mostra o tabuleiro do jogo.

#### `showRestartButton()`

Mostra o botão de "Restart Game" e esconde o tabuleiro do jogo.

#### `hideRestartButton()`

Esconde o botão de "Restart Game" e mostra o tabuleiro do jogo.
