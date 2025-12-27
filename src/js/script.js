import { GameModel } from './models/gameModel.js';
import { GameView } from './views/gameView.js';
import { GameController } from './controllers/gameController.js';
import { MusicPlayer } from './utils/musicPlayer.js';
import { GAME_CONSTANTS } from './utils/config.js';

const gameBoard = document.getElementById('game-board');
const gridSize = GAME_CONSTANTS.GRID_SIZE;

const model = new GameModel(gridSize);
const view = new GameView(gameBoard, gridSize);
const controller = new GameController(model, view);

const playButton = document.getElementById('play-button');
const restartButton = document.getElementById('restart-button');

playButton.addEventListener('click', () => {
    controller.initGame();
    musicPlayer.play(); // Inicia a música ao iniciar o jogo
});

restartButton.addEventListener('click', () => {
    controller.resetGame();
    musicPlayer.play(); // Reinicia a música ao reiniciar o jogo
});

const musicPlayer = new MusicPlayer('background-music');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
    musicPlayer.toggleMute();
    // SVG color is controlled via CSS based on the mute state if needed, or remains as defined in SVG
});

// Attempt to play music automatically, handle potential errors
window.addEventListener('load', () => {
    // A música agora é iniciada via botão de play/restart
    // musicPlayer.play(); 
});

// Não inicia o jogo automaticamente, espera pelo botão de play
// controller.startGame();
