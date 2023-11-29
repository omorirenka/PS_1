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
        const player = this.physics.add.sprite(400, 250, 'taro');
        this.player = player
        this.player.angle = 0;
    }

    update(time, delta)  {
        // if (this.player.x >= D_WIDTH - 200) this.player_direction = -1;
        // if (this.player.x <= 250) this.player_direction = 1;
        // if (this.player_direction == 1) {
        //     this.player.setVelocity(200, -200);
        // } else {
        //     this.player.setVelocity(-200, 200);
        // }

        this.player.setVelocity(200, -200);
        this.player.angle += 5;
        this.player.setAngle( this.player.angle );
        
    }
}