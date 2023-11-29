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
        if (this.player.x >= D_WIDTH - 200) this.player_direction = -1;
        if (this.player.x <= 250) this.player_direction = 1;

        if (this.player_direction == 1) {
            this.player.setVelocity(200, -200);
        } else {
            this.player.setVelocity(-200, 200);
         }

        // 回転角度を更新
        // this.player.angle += 5;
        // 回転角度を設定
        // this.player.setAngle( this.player.angle );
        // if (this.player.x >= D_WIDTH - 50) this.player_direction = -1;
        // if (this.player.y >= D_HEIGHT - 50) this.player_direction = 1;
        // if (this.player.x <= 50) this.player_direction = 1;
        // if (this.player.y <= 50) this.player_direction = -1;
        // if (this.player_direction == 1) {
        //     this.player.angle += 5;
        //     this.player.setAngle( this.player.angle );
        //     this.player.x += 5;
        //     this.player.y -= 5;
        // } else {
        //     this.player.angle += 5;
        //     this.player.setAngle( this.player.angle );
        //     this.player.x = 400;
        //     this.player.y = 250;
        // }
    }
}