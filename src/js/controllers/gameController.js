export class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.gameInterval = null;
        document.addEventListener('keydown', this.handleKeyPress.bind(this));

        
        this.view.setPlayRestartButtonText('Play');
        this.view.showPlayRestartButton();
        this.view.hideGameBoard();
        this.view.displayScore(this.model.score, this.model.highScore);
    }

    handlePlayRestart() {
        if (this.model.gameOver) {
            clearInterval(this.gameInterval); 
            this.model.gameOver = false; 
            this.model.resetGame(); 
            this.view.clearBoard(); 
            this.view.setPlayRestartButtonText('Play'); 
            this.initGame(); 
        } else {
            this.initGame(); 
        }
    }

    initGame() {
        this.view.hidePlayRestartButton();
        this.view.showGameBoard();
        this.view.render(this.model.snake, this.model.food);
        this.startGameLoop();
    }

    startGameLoop() {
        this.gameInterval = setInterval(() => {
            this.model.moveSnake();
            if (this.model.gameOver) {
                clearInterval(this.gameInterval);
                this.view.setPlayRestartButtonText('Restart');
                this.view.showPlayRestartButton();
                this.view.hideGameBoard();
                this.view.displayScore(this.model.score, this.model.highScore);
            } else {
                this.view.render(this.model.snake, this.model.food);
                this.view.displayScore(this.model.score, this.model.highScore);
            }
        }, this.model.gameSpeedDelay);
    }

    handleKeyPress(event) {
        this.model.setDirection(event.key);
    }

}
