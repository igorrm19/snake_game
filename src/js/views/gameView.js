export class GameView {
    constructor(gameBoardElement, gridSize) {
        this.gameBoardElement = gameBoardElement;
        this.gridSize = gridSize;
        this.playButton = document.getElementById('play-button');
        this.restartButton = document.getElementById('restart-button');
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
        alert('Game Over!');
        this.showRestartButton();
    }

    displayScore(score, highScore) {
        if (this.scoreDisplay) {
            this.scoreDisplay.textContent = `Score: ${score}`;
        }
        if (this.highScoreDisplay) {
            this.highScoreDisplay.textContent = `High Score: ${highScore}`;
        }
    }

    showPlayButton() {
        this.playButton.classList.remove('hidden');
        this.restartButton.classList.add('hidden');
        this.gameBoardElement.classList.add('hidden');
    }

    hidePlayButton() {
        this.playButton.classList.add('hidden');
        this.gameBoardElement.classList.remove('hidden');
    }

    showRestartButton() {
        this.restartButton.classList.remove('hidden');
        this.gameBoardElement.classList.add('hidden'); // Esconde o tabuleiro após o game over
    }

    hideRestartButton() {
        this.restartButton.classList.add('hidden');
        this.gameBoardElement.classList.remove('hidden');
    }
}

