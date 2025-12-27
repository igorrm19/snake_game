export class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.gameInterval = null;
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }

    startGame() {
        this.gameInterval = setInterval(() => {
            this.model.moveSnake();
            if (this.model.gameOver) {
                clearInterval(this.gameInterval);
                this.view.displayGameOver();
            } else {
                this.view.render(this.model.snake, this.model.food);
                this.view.displayScore(this.model.score);
            }
        }, this.model.gameSpeedDelay);
    }

    handleKeyPress(event) {
        this.model.setDirection(event.key);
    }

    resetGame() {
        clearInterval(this.gameInterval);
        this.model.resetGame();
        this.view.clearBoard();
        this.startGame();
    }
}
