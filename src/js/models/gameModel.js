export class GameModel {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.snake = [{ x: 10, y: 10 }];
        this.food = {};
        this.direction = 'right';
        this.gameSpeedDelay = 200;
        this.gameOver = false;
        this.score = 0;
        this.generateFood();
    }

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
                break;
            case 'down':
                head.y++;
                break;
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
        }

        this.snake.unshift(head);

        if (head.x === this.food.x && head.y === this.food.y) {
            this.score++;
            this.generateFood();
        } else {
            this.snake.pop();
        }

        this.checkCollision();
    }

    checkCollision() {
        const head = this.snake[0];

        // Wall collision
        if (head.x < 1 || head.x > this.gridSize || head.y < 1 || head.y > this.gridSize) {
            this.gameOver = true;
        }

        // Self-collision
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
        this.snake = [{ x: 10, y: 10 }];
        this.direction = 'right';
        this.score = 0;
        this.gameOver = false;
        this.generateFood();
    }
}

