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
    },

    create: function(){
        this.sys.install('PhaserPlaybook');
    },

    update: function(){

    },

    render: function(){

    }
});