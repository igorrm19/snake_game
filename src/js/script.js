import { GameModel } from './models/gameModel.js';
import { GameView } from './views/gameView.js';
import { GameController } from './controllers/gameController.js';
import { MusicPlayer } from './utils/musicPlayer.js';
import { GAME_CONSTANTS } from './utils/config.js';

const ctaButton = document.querySelector('.cta');
const gameBoard = document.getElementById('game-board');
const gridSize = GAME_CONSTANTS.GRID_SIZE;

const model = new GameModel(gridSize);
const view = new GameView(gameBoard, gridSize);
const controller = new GameController(model, view);

const playRestartButton = document.getElementById('play-restart-button');

playRestartButton.addEventListener('click', () => {
    controller.handlePlayRestart();
    musicPlayer.play();
    ctaButton.style.backgroundColor = 'var(--danger-color)';
});


const musicPlayer = new MusicPlayer('background-music');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
    musicPlayer.toggleMute();

});

window.addEventListener('load', () => {


});

