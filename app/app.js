var game;

document.addEventListener("DOMContentLoaded", function(event){

    var gameConfig = {
        type: Phaser.AUTO,
        parent: 'game',
        width: 640,
        height: 480,
        scene: [
            ExampleScene
        ]
    };

    //create a new game and run it
    game = new Phaser.Game(gameConfig);
});