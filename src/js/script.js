import { GameModel } from './models/gameModel.js';
import { GameView } from './views/gameView.js';
import { GameController } from './controllers/gameController.js';
import { MusicPlayer } from './utils/musicPlayer.js';

const gameBoard = document.getElementById('game-board');
const gridSize = 25;

const model = new GameModel(gridSize);
const view = new GameView(gameBoard, gridSize);
const controller = new GameController(model, view);

const musicPlayer = new MusicPlayer('background-music');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
    musicPlayer.toggleMute();
    // SVG color is controlled via CSS based on the mute state if needed, or remains as defined in SVG
});

// Attempt to play music automatically, handle potential errors
window.addEventListener('load', () => {
    musicPlayer.play();
});

controller.startGame();
