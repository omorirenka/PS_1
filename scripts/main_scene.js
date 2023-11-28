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
        this.add.image(400, 300, 'taro');
    }

    update() {

    }
}