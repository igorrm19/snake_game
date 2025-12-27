# `gameModel.js` Documentation

## Overview

The `GameModel` class is responsible for managing the entire state of the Snake game. It holds all the data related to the game, such as the snake's position, the food's position, the current direction of the snake, the game's speed, the game over status, and the player's score. It also contains the core logic for game mechanics that directly affect the state, like moving the snake, generating new food, and detecting collisions.

## Class: `GameModel`

### Constructor

`constructor(gridSize)`

-   **`gridSize`**: The size of the game grid (e.g., 20x20). This determines the boundaries of the game board.

Initializes the game state:
-   `snake`: An array of objects, where each object `{ x, y }` represents a segment of the snake. Starts with a single segment.
-   `food`: An object `{ x, y }` representing the food's position. Initialized by `generateFood()`.
-   `direction`: The current direction of the snake ('up', 'down', 'left', 'right'). Defaults to 'right'.
-   `gameSpeedDelay`: The delay in milliseconds between each game tick. Defaults to 200ms.
-   `gameOver`: A boolean indicating if the game has ended. Defaults to `false`.
-   `score`: The player's current score. Defaults to 0.

### Methods

#### `generateFood()`

Randomly places new food on the game grid. It ensures that the food does not spawn on top of any part of the snake.

#### `moveSnake()`

Updates the position of the snake based on the current `direction`.
-   Moves the head of the snake in the current direction.
-   If the snake's head collides with food, the `score` is incremented, and new food is generated. The snake's length increases.
-   If no food is eaten, the tail of the snake is removed, maintaining the snake's current length.
-   Calls `checkCollision()` after each move.

#### `checkCollision()`

Detects if the snake has collided with a wall or with itself.
-   **Wall Collision**: Checks if the snake's head goes beyond the `gridSize` boundaries.
-   **Self-Collision**: Iterates through the snake's body segments to see if the head's position matches any body segment's position.
-   If a collision is detected, sets `this.gameOver` to `true`.

#### `setDirection(newDirection)`

Updates the `direction` of the snake based on user input (keyboard arrow keys). It prevents the snake from immediately reversing direction (e.g., going 'down' if currently moving 'up').

-   **`newDirection`**: A string representing the key pressed (e.g., 'ArrowUp').

#### `resetGame()`

Resets all game state variables to their initial values, effectively starting a new game.
-   Resets `snake`, `direction`, `score`, and `gameOver`.
-   Generates new food.

