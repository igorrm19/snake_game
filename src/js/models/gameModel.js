import { GAME_CONSTANTS } from '../utils/config.js';

export class GameModel {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.snake = [GAME_CONSTANTS.INITIAL_SNAKE_POSITION];
        this.food = {};
        this.direction = GAME_CONSTANTS.INITIAL_DIRECTION;
        this.gameSpeedDelay = GAME_CONSTANTS.GAME_SPEED_DELAY;
        this.gameOver = false;
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem(GAME_CONSTANTS.HIGH_SCORE_KEY)) || 0;
        this.generateFood();
    }
    // ok
    generateFood() {
        let newFoodX, newFoodY;
        do {
            newFoodX = Math.floor(Math.random() * this.gridSize) + 1;
            newFoodY = Math.floor(Math.random() * this.gridSize) + 1;
        } while (this.snake.some(segment => segment.x === newFoodX && segment.y === newFoodY));
        this.food = { x: newFoodX, y: newFoodY };
    }

    moveSnake() {
        const head = { ...this.snake[0] };

        switch (this.direction) {
            case 'up':
                head.y--;
                if (head.y < 1) head.y = this.gridSize;
                break;
            case 'down':
                head.y++;
                if (head.y > this.gridSize) head.y = 1;
                break;
            case 'left':
                head.x--;
                if (head.x < 1) head.x = this.gridSize;
                break;
            case 'right':
                head.x++;
                if (head.x > this.gridSize) head.x = 1;
                break;
        }

        this.snake.unshift(head);

        if (head.x === this.food.x && head.y === this.food.y) {
            this.score++;
            if (this.score > this.highScore) {
                this.highScore = this.score;
                localStorage.setItem(GAME_CONSTANTS.HIGH_SCORE_KEY, this.highScore);
            }
            this.generateFood();
        } else {
            this.snake.pop();
        }

        this.checkCollision();
    }

    checkCollision() {
        const head = this.snake[0];

        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                this.gameOver = true;
                break;
            }
        }
    }

    setDirection(newDirection) {
        if (this.gameOver) return;

        switch (newDirection) {
            case 'ArrowUp':
                if (this.direction !== 'down') this.direction = 'up';
                break;
            case 'ArrowDown':
                if (this.direction !== 'up') this.direction = 'down';
                break;
            case 'ArrowLeft':
                if (this.direction !== 'right') this.direction = 'left';
                break;
            case 'ArrowRight':
                if (this.direction !== 'left') this.direction = 'right';
                break;
        }
    }

    resetGame() {
        this.snake = [GAME_CONSTANTS.INITIAL_SNAKE_POSITION];
        this.direction = GAME_CONSTANTS.INITIAL_DIRECTION;
        this.score = 0;
        this.gameOver = false;
        this.generateFood();
        this.highScore = parseInt(localStorage.getItem(GAME_CONSTANTS.HIGH_SCORE_KEY)) || 0; // Recarrega a maior pontuação
    }
}

