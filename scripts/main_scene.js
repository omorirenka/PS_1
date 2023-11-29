class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    preload() {
        this.load.image('back', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('jiro', 'assets/jiro.png');
    }

    create() {
        this.add.image(400, 225, 'back');
        const player1 = this.physics.add.sprite(500, 250, 'taro');
        this.player1 = player1
        const player2 = this.physics.add.sprite(300, 250, 'jiro');
        this.player2 = player2
        // this.player.angle = 0;
    }

    update(time, delta)  {
        // if (this.player.x >= D_WIDTH - 200) this.player_direction = -1;
        // if (this.player.x <= 250) this.player_direction = 1;
        // if (this.player_direction == 1) {
        //     this.player.setVelocity(200, -200);
        // } else {
        //     this.player.setVelocity(-200, 200);
        // }

        // this.player.setVelocity(200, -200);
        // this.player.angle += 5;
        // this.player.setAngle( this.player.angle );

        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.up.isDown) {
            this.player1.y -= 50;
            this.player2.y -= 50;
        } else if (cursors.down.isDown) {
            this.player1.y += 50;
            this.player2.y += 50;
        } else if (cursors.left.isDown) {
            this.player1.x -= 50;
            this.player2.x += 50;
        } else if (cursors.right.isDown) {
            this.player1.x += 50;
            this.player2.x -= 50;
        }
        
    }
}