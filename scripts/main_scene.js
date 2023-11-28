class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    preload() {
        this.load.image('back', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
    }

    create() {
        this.add.image(400, 225, 'back');
        this.player = this.add.image(400, 300, 'taro');
        this.player_direction = 1;
    }

    update() {
        if (this.player.x >= D_WIDTH - 50) this.player_direction = -1;
        if (this.player.y >= D_HEIGHT - 50) this.player_direction = -1;
        if (this.player.x <= 50) this.player_direction = 1;
        if (this.player.y <= 50) this.player_direction = 1;
        if (this.player_direction == 1) {
            this.player.x += 5;
            this.player.y += 5;
        } else {

            this.player.x -= 5;
            this.player.y -= 5;
        }
    }
}