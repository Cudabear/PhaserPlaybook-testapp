ExampleScene = new Phaser.Class({ 
    Extends: Phaser.Scene,
    key: 'ExampleScene',
    initialize: 

    function BootupScene(config){
        Phaser.Scene.call(this, {key: this.key, active: true});
    },

    preload: function(){
        //TODO: pull this in dynamically
        this.load.plugin('PhaserPlaybook', '../../src/playbook.js');

        //playbooks are just treated as JSON objects
        this.load.json('example-scene', '../examples/exampleScene.json');

        //playbooks do not load in sprites for you
        this.load.spritesheet('actor-guy', '../res/guy.png', {frameWidth: 24, frameHeight: 48});
    },

    create: function(){
        //animations are not generated by the playbook
        this.anims.create({
            key: 'actor-walk',
            frames: this.anims.generateFrameNumbers('actor-guy', {start: 0, end: 9}),
            frameRate: 8,
            repeat: 0
        })

        //install the playbook on this scene
        this.sys.install('PhaserPlaybook');

        //add a playbook you want to run
        this.sys.phaserPlaybook.addPlaybook('example-scene');
    },

    update: function(){

    },

    render: function(){

    }
});