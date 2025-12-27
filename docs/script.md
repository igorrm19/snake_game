# Documentação de `script.js`

## Visão Geral

O arquivo `script.js` serve como o ponto de entrada principal para a aplicação do jogo Snake. Ele é responsável por importar os módulos do Model, View e Controller, inicializar essas classes com os elementos e configurações necessárias do DOM, e então iniciar o jogo chamando o método apropriado do Controller. Essencialmente, este arquivo coordena a configuração inicial do padrão MVC.

## Importações

-   `GameModel` de `./models/gameModel.js`: Importa a classe `GameModel`, que gerencia o estado e a lógica de negócio do jogo.
-   `GameView` de `./views/gameView.js`: Importa a classe `GameView`, responsável pela renderização visual do jogo.
-   `GameController` de `./controllers/gameController.js`: Importa a classe `GameController`, que manipula a entrada do usuário e o fluxo do jogo.
-   `MusicPlayer` de `./utils/musicPlayer.js`: Importa a classe `MusicPlayer`, responsável pelo controle da música de fundo.

## Inicialização

1.  **Obtenção do Elemento do Tabuleiro**: O script obtém uma referência ao elemento HTML com o ID `game-board` (`<div id="game-board"></div>`) que será o contêiner do jogo.

    ```javascript
    const gameBoard = document.getElementById('game-board');
    ```

2.  **Definição do Tamanho da Grade**: É definida uma constante `gridSize` para especificar as dimensões da grade do jogo.

    ```javascript
    const gridSize = 25;
    ```

3.  **Instanciação das Classes MVC e MusicPlayer**:
    -   Cria uma nova instância de `GameModel`, passando o `gridSize`.
    -   Cria uma nova instância de `GameView`, passando o `gameBoard` e o `gridSize`.
    -   Cria uma nova instância de `GameController`, passando as instâncias recém-criadas de `model` e `view`.
    -   Cria uma nova instância de `MusicPlayer`, passando o ID do elemento de áudio (`'background-music'`).

    ```javascript
    const model = new GameModel(gridSize);
    const view = new GameView(gameBoard, gridSize);
    const controller = new GameController(model, view);

    const musicPlayer = new MusicPlayer('background-music');
    const muteButton = document.getElementById('mute-button');
    ```

4.  **Configuração do Botão de Mute**: Um `event listener` é adicionado ao `muteButton` para alternar o estado de mudo da música quando clicado.

    ```javascript
    muteButton.addEventListener('click', () => {
        musicPlayer.toggleMute();
        // A cor do SVG é controlada via CSS e pode mudar com base no estado de mute, se necessário.
    });
    ```

5.  **Reprodução Automática de Música**: Uma tentativa de reproduzir a música automaticamente é feita após o carregamento da janela.

    ```javascript
    window.addEventListener('load', () => {
        musicPlayer.play();
    });
    ```

6.  **Início do Jogo**: Finalmente, o método `startGame()` do `controller` é chamado para iniciar o ciclo do jogo.

    ```javascript
    controller.startGame();
    ```

## Como Funciona

Este arquivo age como o orquestrador inicial. Ele conecta as três partes do padrão MVC, garantindo que o modelo, a visão e o controlador estejam cientes uns dos outros (onde apropriado) e possam interagir para fazer o jogo funcionar. Ao manter a lógica de inicialização separada, o código permanece limpo e cada componente foca em sua responsabilidade única.
