let config;
let game;

const D_WIDTH = 800;
const D_HEIGHT = 450;

window.onload = function() {
    config = {
        type: Phaser.AUTO,
        width: D_WIDTH,
        height: D_HEIGHT,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y:0
                },
                debug: true
            }
        },
        scene: MainScene
    };
    game = new Phaser.Game(config);
}; 