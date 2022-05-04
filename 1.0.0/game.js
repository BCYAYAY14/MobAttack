const gameState = {}
function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}
function preload() {
    this.load.audio('fade', ["music/Alan Walker - Fade.mp3", "music/Alan Walker - Fade.wav"])
    this.load.audio('orb', ["music/orb.mp3"])
    this.load.audio('tada', ["music/tada.wav"])
    this.load.audio('death', ["music/death.mp3"])
    this.load.image('copper-sword', "images/sword-copper.png")
    this.load.image('steel-sword', "images/sword-steel.png")
    this.load.image('diamond-sword', "images/sword-diamond.png")
    this.load.image('emerald-sword', "images/sword-emerald.png")
    this.load.image('copper-sword', "images/sword-copper.png")
    this.load.image('steel-sword', "images/sword-steel.png")
    this.load.image('diamond-sword', "images/sword-diamond.png")
    this.load.image('emerald-sword', "images/sword-emerald.png")
    this.load.image('music', "images/music.svg")
    this.load.image('drowned', "images/drowned.webp")
    this.load.image('music-closed', "images/music-closed.svg")
    loadFont("Poppins", "fonts/Poppins.tff");
}

function create() {
    gameState.score = 0
    gameState.playing = true
    graphics = this.add.graphics();
    gameState.music = {
    
    }

   gameState.mobs = {}

    gameState.music.fade = this.sound.add('fade', {loop: true, volume: 0.5})
    gameState.music.orb = this.sound.add('orb')
    gameState.music.tada = this.sound.add('tada')
    gameState.music.death = this.sound.add('death')
    gameState.music.fade.play()
    this.input.setDefaultCursor('url(images/crosshair.svg), crosshair')
    gameState.sword = this.physics.add.sprite(700, 500, 'copper-sword')
    gameState.sword.displayWidth = 59
    gameState.sword.displayHeight = 180
    gameState.inv = {}
    gameState.invCircles = {}
    // Copper
    gameState.inv.copper = this.add.sprite(280, 740, "copper-sword")
    gameState.inv.copper.displayWidth = 25
    gameState.inv.copper.displayHeight = 76.2711864408
    gameState.inv.copper.depth = 2


    gameState.invCircles.copper = this.add.circle(280, 740, 46, 0x6F1933)
    gameState.invCircles.copper.depth = 1
    gameState.invCircles.outer = {}
    gameState.invCircles.outer.copper = this.add.circle(280, 740, 50, 0x000)
    gameState.invCircles.outer.copper.visible = true
    gameState.inv.copper.setInteractive()
    // Steel
    gameState.inv.steel = this.add.sprite(560, 740, "steel-sword")
    gameState.inv.steel.displayWidth = 25
    gameState.inv.steel.displayHeight = 76.2711864408
    gameState.inv.steel.depth = 2
    gameState.invCircles.steel = this.add.circle(560, 740, 46, 0x6F1933)
    gameState.invCircles.steel.depth = 1
    gameState.invCircles.outer.steel = this.add.circle(560, 740, 50, 0x000)
    gameState.invCircles.outer.steel.visible = false
    gameState.inv.steel.setInteractive()
    // Diamond
    gameState.inv.diamond = this.add.sprite(840, 740, "diamond-sword")
    gameState.inv.diamond.displayWidth = 25
    gameState.inv.diamond.displayHeight = 76.2711864408
    gameState.inv.diamond.depth = 2
    gameState.invCircles.diamond = this.add.circle(840, 740, 46, 0x6F1933)
    gameState.invCircles.diamond.depth = 1
    gameState.invCircles.outer.diamond = this.add.circle(840, 740, 50, 0x000)
    gameState.invCircles.outer.diamond.visible = false
    gameState.inv.diamond.setInteractive()
    // Emerald
    gameState.inv.emerald = this.add.sprite(1120, 740, "emerald-sword")
    gameState.inv.emerald.displayWidth = 25
    gameState.inv.emerald.displayHeight = 76.2711864408
    gameState.inv.emerald.depth = 2
    gameState.invCircles.emerald = this.add.circle(1120, 740, 46, 0x6F1933)
    gameState.invCircles.outer.emerald = this.add.circle(1120, 740, 50, 0x000)
    gameState.invCircles.outer.emerald.visible = false
    gameState.invCircles.emerald.depth = 1

    gameState.inv.emerald.setInteractive()
    this.add.rectangle(700, 740, 1400, 120, 0xBA3434).depth = -1
    gameState.cursors = this.input.keyboard.createCursorKeys()
gameState.over = false



    gameState.hover = {

    }

    gameState.hover.sword = {

    } 
    graphics.fillStyle(0x363636, 1);
    gameState.hover.sword.copper = {}
    gameState.hover.sword.copper.rect =  this.add.graphics().fillRoundedRect(180, 625, 200, 50, 16)
 gameState.hover.sword.copper.text =   this.add.text(220, 641, 'Copper Sword', { fontFamily: "Poppins" })
 gameState.hover.sword.steel = {}
 gameState.hover.sword.steel.rect = this.add.graphics().fillRoundedRect(460, 625, 200, 50, 16)
 gameState.hover.sword.steel.text =   this.add.text(510, 641, 'Steel Sword', { fontFamily: "Poppins" })
 gameState.hover.sword.diamond = {}
 gameState.hover.sword.diamond.rect = this.add.graphics().fillRoundedRect(740, 625, 200, 50, 16)
 gameState.hover.sword.diamond.text =   this.add.text(780, 641, 'Diamond Sword', { fontFamily: "Poppins" })
 gameState.hover.sword.emerald = {}
 gameState.hover.sword.emerald.rect = this.add.graphics().fillRoundedRect(1020, 625, 200, 50, 16)
 gameState.hover.sword.emerald.rect.visible = true
 gameState.hover.sword.emerald.text =   this.add.text(1060, 641, 'Emerald Sword', { fontFamily: "Poppins" })

 gameState.hover.sword.copper.rect.visible = false
 gameState.hover.sword.steel.rect.visible = false
 gameState.hover.sword.diamond.rect.visible = false
 gameState.hover.sword.emerald.rect.visible = false

 gameState.hover.sword.copper.text.visible = false
 gameState.hover.sword.steel.text.visible = false
 gameState.hover.sword.diamond.text.visible = false
 gameState.hover.sword.emerald.text.visible = false
gameState.died = {}
gameState.died.rect = this.add.rectangle(700, 400, 1400, 800, 0xEBA3A2)
gameState.died.text = this.add.text(650, 400, "You Died", {fontFamily: "Poppins", fontSize: 40})
gameState.died.text.depth = 7
gameState.died.rect.depth = 6
gameState.died.text.visible = false
gameState.died.rect.visible = false
 gameState.win = {}
 gameState.win.rect = this.add.rectangle(700, 400, 1400, 800, 0xEBA3A2)
 gameState.win.text = this.add.text(650, 400, "You win!", {fontFamily: "Poppins", fontSize: 40})
 gameState.win.text.depth = 5
 gameState.win.rect.depth = 4
 gameState.win.text.visible = false
 gameState.win.rect.visible = false
 gameState.mobs.drowned = []
 gameState.spawn = true
 gameState.scoreText = this.add.text(20, 20, "Score: 0", { fontFamily: "Poppins", color: "black"})
}

function update() {
    if (gameState.spawn == true) {
        if (gameState.score == 10)    {
            gameState.spawn = false
            gameState.win.text.visible = true
            gameState.win.rect.visible = true
            gameState.music.tada.play()
            gameState.music.fade.stop()

        } else if(gameState.over) {
            gameState.spawn = false
            gameState.died.text.visible = true
            gameState.died.rect.visible = true
            gameState.music.death.play()
            gameState.music.fade.stop()
        } else {   let pos = Math.round(Math.random() * 1400)
            gameState.mobs.drowned.push(this.physics.add.sprite(pos, 100, 'drowned'))
            gameState.mobs.drowned.forEach(mob => {mob.y+= 1 
            mob.displayHeight = 213 
            mob.displayWidth = 130})
            gameState.spawn = false
            setTimeout(() => {
                gameState.spawn = true
            }, 5000);
            }
     
          
    }
   
    gameState.mobs.drowned.forEach(mob => {
        if (mob.y > 600 && !mob.died) {
   
            mob.destroy()
            gameState.over =  true
        }
        mob.y+= 0.6
        this.physics.add.collider(mob, gameState.sword, function (mob, sword) {
            mob.destroy()
            mob.died = true
            gameState.music.orb.play()
            gameState.score += 1
            gameState.scoreText.setText(`Score: ${gameState.score}`)
            if (gameState.score == 2) {
    
            }
        })})
 

    gameState.inv.copper.on('pointerover', function() {
        gameState.hover.sword.copper.rect.visible = true
        gameState.hover.sword.copper.text.visible = true
    }) 
      gameState.inv.copper.on('pointerout', function() {
        gameState.hover.sword.copper.rect.visible = false
        gameState.hover.sword.copper.text.visible = false
    })



    gameState.inv.steel.on('pointerover', function() {
        gameState.hover.sword.steel.rect.visible = true
        gameState.hover.sword.steel.text.visible = true
    }) 
      gameState.inv.steel.on('pointerout', function() {
        gameState.hover.sword.steel.rect.visible = false
        gameState.hover.sword.steel.text.visible = false
    })


    gameState.inv.diamond.on('pointerover', function() {
        gameState.hover.sword.diamond.rect.visible = true
        gameState.hover.sword.diamond.text.visible = true
    }) 
      gameState.inv.diamond.on('pointerout', function() {
        gameState.hover.sword.diamond.rect.visible = false
        gameState.hover.sword.diamond.text.visible = false
    })


    gameState.inv.emerald.on('pointerover', function() {
        gameState.hover.sword.emerald.rect.visible = true
        gameState.hover.sword.emerald.text.visible = true
    }) 
      gameState.inv.emerald.on('pointerout', function() {
        gameState.hover.sword.emerald.rect.visible = false
        gameState.hover.sword.emerald.text.visible = false
    })


    gameState.inv.copper.on('pointerup', function () {
        gameState.sword.setTexture('copper-sword')
        gameState.invCircles.outer.copper.visible = true
        gameState.invCircles.outer.steel.visible = false
        gameState.invCircles.outer.diamond.visible = false
        gameState.invCircles.outer.emerald.visible = false
    })
    gameState.inv.steel.on('pointerup', function () {
        gameState.sword.setTexture('steel-sword')
        gameState.invCircles.outer.copper.visible = false
        gameState.invCircles.outer.steel.visible = true
        gameState.invCircles.outer.diamond.visible = false
        gameState.invCircles.outer.emerald.visible = false
    })
    gameState.inv.diamond.on('pointerup', function () {
        gameState.sword.setTexture('diamond-sword')
        gameState.invCircles.outer.copper.visible = false
        gameState.invCircles.outer.steel.visible = false
        gameState.invCircles.outer.diamond.visible = true
        gameState.invCircles.outer.emerald.visible = false
    })
    gameState.inv.emerald.on('pointerup', function () {
        gameState.sword.setTexture('emerald-sword')
        gameState.invCircles.outer.copper.visible = false
        gameState.invCircles.outer.steel.visible = false
        gameState.invCircles.outer.diamond.visible = false
        gameState.invCircles.outer.emerald.visible = true
    })

    if (gameState.cursors.down.isDown) {
        gameState.sword.angle = 180;
        if ((gameState.sword.y + 95) > 680) {

        } else {
            gameState.sword.y += 4

        }

    } 
     if (gameState.cursors.up.isDown) {
        gameState.sword.angle = 0;
        if ((gameState.sword.y - 4) < 95) {

        } else {
            gameState.sword.y -= 4
        }

    } 
    if (gameState.cursors.left.isDown) {
        gameState.sword.angle = -30;
        if ((gameState.sword.x - 4) < 50) {

        } else {
            gameState.sword.x -= 4
        }

    } 
     if (gameState.cursors.right.isDown) {
        gameState.sword.angle = 30;
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
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)