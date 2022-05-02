const gameState = {}

function preload() {
    this.load.image('copper-sword', "images/sword-copper.png")
    this.load.image('steel-sword', "images/sword-steel.png")
    this.load.image('diamond-sword', "images/sword-diamond.png")
    this.load.image('emerald-sword', "images/sword-emerald.png")
    this.load.image('copper-sword', "images/sword-copper.png")
    this.load.image('steel-sword', "images/sword-steel.png")
    this.load.image('diamond-sword', "images/sword-diamond.png")
    this.load.image('emerald-sword', "images/sword-emerald.png")
}

function create() {
    gameState.sword = this.add.sprite(700, 500, 'copper-sword')
    gameState.sword.displayWidth = 59
    gameState.sword.displayHeight = 180
    gameState.inv = {}
    // Copper
    gameState.inv.copper = this.add.sprite(280, 740, "copper-sword")
    gameState.inv.copper.displayWidth = 36
    gameState.inv.copper.displayHeight = 109
    gameState.inv.copper.depth = 2
    gameState.inv.copper.angle = -30
    gameState.inv.copper.setInteractive()
    // Steel
    gameState.inv.steel = this.add.sprite(560, 740, "steel-sword")
    gameState.inv.steel.displayWidth = 36
    gameState.inv.steel.displayHeight = 109
    gameState.inv.steel.depth = 2
    gameState.inv.steel.angle = 0
    gameState.inv.steel.setInteractive()
    // Diamond
    gameState.inv.diamond = this.add.sprite(840, 740, "diamond-sword")
    gameState.inv.diamond.displayWidth = 36
    gameState.inv.diamond.displayHeight = 109
    gameState.inv.diamond.depth = 2
    gameState.inv.diamond.angle = 0
    gameState.inv.diamond.setInteractive()
      // Emerald
    gameState.inv.emerald = this.add.sprite(1120, 740, "emerald-sword")
    gameState.inv.emerald.displayWidth = 36
    gameState.inv.emerald.displayHeight = 109
    gameState.inv.emerald.depth = 2
    gameState.inv.emerald.angle = 30
    gameState.inv.emerald.setInteractive()
    this.add.rectangle(700, 740, 1400, 120, 0xBA3434).depth = 1
    gameState.cursors = this.input.keyboard.createCursorKeys()

}

function update() {

    gameState.inv.copper.on('pointerup', function() {
        gameState.sword.setTexture('copper-sword')
    })
    gameState.inv.steel.on('pointerup', function() {
        gameState.sword.setTexture('steel-sword')
    })
    gameState.inv.diamond.on('pointerup', function() {
        gameState.sword.setTexture('diamond-sword')
    })
    gameState.inv.emerald.on('pointerup', function() {
        gameState.sword.setTexture('emerald-sword')
    })
    
    if (gameState.cursors.down.isDown) {
        gameState.sword.angle = 180;
        if ((gameState.sword.y + 95) > 680) {

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
    height: 800,
    backgroundColor: 0xC8D2DA,
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)