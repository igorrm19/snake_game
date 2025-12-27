export class GameView {
    constructor(gameBoardElement, gridSize) {
        this.gameBoardElement = gameBoardElement;
        this.gridSize = gridSize;
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
    }

    displayScore(score) {
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Score: ${score}`;
        }
    }
}

