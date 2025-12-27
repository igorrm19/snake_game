export class MusicPlayer {
    constructor(audioElementId) {
        this.audioElement = document.getElementById(audioElementId);
        this.isMuted = false;
        if (this.audioElement) {
            this.audioElement.volume = 0.5; // Default volume
            this.audioElement.loop = true; // Loop the music
        }
    }

    play() {
        if (this.audioElement && !this.isMuted) {
            this.audioElement.play().catch(e => console.error("Error playing audio:", e));
        }
    }

    pause() {
        if (this.audioElement) {
            this.audioElement.pause();
        }
    }

    toggleMute() {
        if (this.audioElement) {
            this.isMuted = !this.isMuted;
            this.audioElement.muted = this.isMuted;
            return this.isMuted; // Return current mute state
        }
        return false;
    }

    setVolume(volume) {
        if (this.audioElement) {
            this.audioElement.volume = volume;
        }
    }
}

