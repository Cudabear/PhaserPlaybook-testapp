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
    },

    create: function(){
        //install the playbook on this scene
        this.sys.install('PhaserPlaybook');

        //set the playbook you want to run
        this.sys.phaserPlaybook.setPlaybook('example-scene');
    },

    update: function(){

    },

    render: function(){

    }
});