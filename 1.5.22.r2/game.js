const gameState = {}

function preload() {
    this.load.image('sword', "images/sword-blue.png")
}

function create() {
    gameState.sword = this.add.sprite(700, 550, 'sword')
    gameState.cursors = this.input.keyboard.createCursorKeys()
}

function update() {
    if (gameState.cursors.down.isDown) {
        gameState.sword.angle = 180;
        if ((gameState.sword.y + 95) > 700) {

        } else {
            gameState.sword.y += 4
        }
       
      } else if (gameState.cursors.up.isDown) {
        gameState.sword.angle = 0;
        if ((gameState.sword.y -  4) < 95) {

        } else {
            gameState.sword.y -= 4
        }
    
      }  else if (gameState.cursors.left.isDown) {
          gameState.sword.angle = -30;
        if ((gameState.sword.x - 4) < 50) {

        } else {
            gameState.sword.x -= 4
        }
    
      } else if (gameState.cursors.right.isDown) {
        gameState.sword.angle =     30;
        if ((gameState.sword.x + 4) > 1350) {

        } else {
            gameState.sword.x += 4
        }
    
      } 
}

const config = {
    width: 1400,
    height: 700,
    backgroundColor: 0xC8D2DA,
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)