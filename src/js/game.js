// Simple H5 Game Example
class Game {
    constructor() {
        this.score = 0;
        this.isPlaying = false;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        document.getElementById('start-btn').addEventListener('click', () => this.start());
    }

    resize() {
        this.canvas.width = Math.min(window.innerWidth - 40, 600);
        this.canvas.height = Math.min(window.innerHeight - 100, 400);
    }

    start() {
        this.score = 0;
        this.isPlaying = true;
        document.getElementById('start-btn').style.display = 'none';
        this.updateScore();
        this.gameLoop();
    }

    updateScore() {
        document.getElementById('score').textContent = `Score: ${this.score}`;
    }

    gameLoop() {
        if (!this.isPlaying) return;

        // Clear canvas
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Simple game logic (placeholder)
        this.score += 10;
        this.updateScore();

        // Continue loop
        requestAnimationFrame(() => this.gameLoop());
    }
}
