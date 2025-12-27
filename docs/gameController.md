# Documentação de `gameController.js`

## Visão Geral

A classe `GameController` atua como o intermediário entre o `GameModel` (dados e lógica de negócio) e o `GameView` (apresentação visual). Sua principal responsabilidade é lidar com a entrada do usuário (eventos de teclado), gerenciar o ciclo do jogo (o loop principal que move a cobra e atualiza a tela) e coordenar as interações entre o modelo e a visão. Ele garante que as ações do usuário e as atualizações do jogo sejam refletidas corretamente no estado do jogo e na interface.

## Classe: `GameController`

### Construtor

`constructor(model, view)`

-   **`model`**: Uma instância da classe `GameModel`, que gerencia o estado do jogo.
-   **`view`**: Uma instância da classe `GameView`, que lida com a renderização da interface.

Inicializa o controlador, configurando:
-   `this.model`: Referência ao modelo do jogo.
-   `this.view`: Referência à visão do jogo.
-   `this.gameInterval`: Variável para armazenar o ID do intervalo do jogo, permitindo que ele seja limpo quando o jogo termina ou é reiniciado.
-   Adiciona um `event listener` para o evento `keydown` no `document`, vinculando `this.handleKeyPress` para processar a entrada do teclado.

### Métodos

#### `startGame()`

Inicia o loop principal do jogo.
-   Define um `setInterval` que executa a lógica do jogo repetidamente a cada `this.model.gameSpeedDelay` milissegundos.
-   Dentro do loop:
    -   Chama `this.model.moveSnake()` para atualizar a posição da cobra no modelo.
    -   Verifica `this.model.gameOver`. Se for `true`:
        -   Limpa o `gameInterval` para parar o loop do jogo.
        -   Chama `this.view.displayGameOver()` para notificar o usuário sobre o fim do jogo.
    -   Se o jogo não acabou:
        -   Chama `this.view.render(this.model.snake, this.model.food)` para atualizar a exibição da cobra e da comida.
        -   Chama `this.view.displayScore(this.model.score)` para exibir a pontuação atual.

#### `handleKeyPress(event)`

Manipula os eventos de pressionamento de tecla.
-   **`event`**: O objeto de evento do teclado.
-   Extrai a tecla pressionada (`event.key`).
-   Chama `this.model.setDirection(event.key)` para atualizar a direção da cobra no modelo, permitindo que o modelo decida se a mudança de direção é válida.

#### `resetGame()`

Reinicia o jogo para um novo começo.
-   Limpa o `gameInterval` para parar qualquer loop de jogo em execução.
-   Chama `this.model.resetGame()` para restaurar o estado do jogo no modelo.
-   Chama `this.view.clearBoard()` para limpar visualmente o tabuleiro do jogo.
-   Chama `startGame()` para iniciar um novo ciclo de jogo.

