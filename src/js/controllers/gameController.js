export class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.gameInterval = null;
        document.addEventListener('keydown', this.handleKeyPress.bind(this));

        // Inicializa o jogo mostrando o botão de play
        this.view.showPlayButton();
        this.view.displayScore(this.model.score, this.model.highScore);
    }

    initGame() {
        this.view.hidePlayButton();
        this.view.hideRestartButton();
        this.model.resetGame();
        this.view.clearBoard();
        this.view.render(this.model.snake, this.model.food); // Renderiza o estado inicial
        this.startGameLoop();
    }

    startGameLoop() {
        this.gameInterval = setInterval(() => {
            this.model.moveSnake();
            if (this.model.gameOver) {
                clearInterval(this.gameInterval);
                this.view.displayGameOver();
                this.view.displayScore(this.model.score, this.model.highScore); // Atualiza a pontuação final e a maior pontuação
            } else {
                this.view.render(this.model.snake, this.model.food);
                this.view.displayScore(this.model.score, this.model.highScore);
            }
        }, this.model.gameSpeedDelay);
    }

    handleKeyPress(event) {
        this.model.setDirection(event.key);
    }

    // Este método é agora mais um wrapper para iniciar um novo jogo
    resetGame() {
        this.initGame();
    }
}
