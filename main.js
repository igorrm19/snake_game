import { GameModel } from './gameModel.js';
import { GameView } from './gameView.js';
import { GameController } from './gameController.js';

const gameBoard = document.getElementById('game-board');
const gridSize = 20;


const model = new GameModel(gridSize);
const view = new GameView(gameBoard, gridSize);
const controller = new GameController(model, view);


controller.startGame();
