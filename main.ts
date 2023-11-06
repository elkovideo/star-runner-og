namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Level0`)
    game.splash("Level 6")
    sprite.setPosition(18, 84)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.setVelocity(0, -100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level24`)
    game.splash("Level 6")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level14`)
    game.splash("Level 4")
    sprite.setPosition(11, 69)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Level3`)
    game.splash("Level 3")
    sprite.setPosition(18, 84)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level29`)
    game.splash("Level 7")
    game.splash("Final Level")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    game.splash("Level 2")
    sprite.setPosition(16, 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level17`)
    game.splash("Level 5")
    sprite.setPosition(24, 79)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.splash("Game Complete!")
    game.splash("Thank You For Playing!")
    game.reset()
})
let sprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage0`)
game.splash("Star Runner 2023")
game.splash("Tap A to Continue")
music.play(music.stringPlayable("D C D E C D C E ", 69), music.PlaybackMode.LoopingInBackground)
game.showLongText("Jump Through The Stars and Try To Get To the End!", DialogLayout.Center)
game.showLongText("Use the Arrow Keys or W, A, S, and D Keys to Move", DialogLayout.Center)
game.showLongText("Use the Space key or the Z Key to Jump", DialogLayout.Center)
game.showLongText("Ready, Set, Go!", DialogLayout.Center)
game.showLongText("Tap A to Continue", DialogLayout.Center)
scene.setBackgroundImage(assets.image`myImage3`)
tiles.setCurrentTilemap(tilemap`level1`)
sprite = sprites.create(assets.image`MC`, SpriteKind.Player)
sprite.setKind(SpriteKind.Player)
controller.moveSprite(sprite, 100, 0)
sprite.setPosition(22, 75)
sprite.ay = 160
sprite.fx = 2800
scene.cameraFollowSprite(sprite)
