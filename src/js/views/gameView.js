export class GameView {
    constructor(gameBoardElement, gridSize) {
        this.gameBoardElement = gameBoardElement;
        this.gridSize = gridSize;
        this.playRestartButton = document.getElementById('play-restart-button');
        this.playRestartButtonText = this.playRestartButton.querySelector('.cta span:first-child');
        this.highScoreDisplay = document.getElementById('high-score-display');
        this.scoreDisplay = document.getElementById('score-display');
    }

    clearBoard() {
        this.gameBoardElement.innerHTML = '';
    }

    drawSnake(snake) {
        snake.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake');
            this.gameBoardElement.appendChild(snakeElement);
        });
    }

    drawFood(food) {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        this.gameBoardElement.appendChild(foodElement);
    }

    render(snake, food) {
        this.clearBoard();
        this.drawSnake(snake);
        this.drawFood(food);
    }

    displayGameOver() {
        this.setPlayRestartButtonText('Restart');
        this.showPlayRestartButton();
        this.hideGameBoard();
    }

    displayScore(score, highScore) {
        if (this.scoreDisplay) {
            this.scoreDisplay.textContent = `Score: ${score}`;
        }
        if (this.highScoreDisplay) {
            this.highScoreDisplay.textContent = `High Score: ${highScore}`;
        }
    }

    setPlayRestartButtonText(text) {
        this.playRestartButtonText.textContent = text;
    }

    showPlayRestartButton() {
        this.playRestartButton.classList.remove('hidden');
    }

    hidePlayRestartButton() {
        this.playRestartButton.classList.add('hidden');
    }

    showGameBoard() {
        this.gameBoardElement.classList.remove('hidden');
    }

    hideGameBoard() {
        this.gameBoardElement.classList.add('hidden');
    }
}

