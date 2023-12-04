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
        this.load.image('hanako', 'assets/hanako.png');
    }

    create() {
        this.add.image(400, 225, 'back');
        const player1 = this.physics.add.sprite(500, 250, 'taro');
        this.player1 = player1
        const player2 = this.physics.add.sprite(300, 250, 'jiro');
        this.player2 = player2
        // this.player.angle = 0;
        this.Text = this.add.text(600, 400, 'MyWorld', { fontSize: '28px', fill: '#FFF' ,fontFamily: "Arial"});
        this.a_Text = this.add.text(100, 50, '', { fontSize: '28px', fill: '#FFF' ,fontFamily: "Arial"});
        this.s_Text = this.add.text(100, 50, '', { fontSize: '28px', fill: '#FFF' ,fontFamily: "Arial"});
    
        this.keys = {};
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.image_x = Phaser.Math.Between(100, 400);
        this.wasd_move(this.keys, this.image_x);
        this.hanako = this.add.image(this.image_x, 100, 'hanako');
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
        
        // テキストを更新する
        this.wasd_move(this.keys, this.a_Text);
        this.wasd_move(this.keys, this.s_Text);
        // this.wasd_move(this.keys, this.image_x);
      
    }

    wasd_move(keys, object){
        if(keys.keyS.isDown){
            this.s_Text.setText('Hey!');
        }else if(keys.keyA.isDown){
            this.a_Text.setText('Hello!');
        }else if(keys.keyD.isDown){
            this.a_Text.setText('');
            this.s_Text.setText('');
        }else if(keys.keyW.isDown){
            this.hanako.destroy();
            this.image_x = Phaser.Math.Between(100, 400);
            this.hanako = this.add.image(this.image_x, 100, 'hanako');
        }
    }
}