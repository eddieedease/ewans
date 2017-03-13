(function() {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }

    Preloader.prototype = {
        preload: function() {
            // preload preloader
            this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
            this.load.setPreloadSprite(this.asset);
            // load audio files first..
            this.load.audio('menu', ['assets/audio/menu.ogg']);
            this.load.audio('platformer', ['assets/audio/platformer.ogg']);

            this.load.audio('birdhit', ['assets/audio/birdhit.ogg']);

            this.load.audio('coin', ['assets/audio/coin.ogg']);
            this.load.audio('hitby', ['assets/audio/hitby.ogg']);
            this.load.audio('scoresound', ['assets/audio/scoresound.ogg']);
            this.load.audio('alarm', ['assets/audio/alarm.ogg']);
            this.load.bitmapFont('scorefont', 'assets/font/font.png', 'assets/font/font.fnt');
            this.load.image('levelup', 'assets/levelup.png');
            this.load.image('tel2', 'assets/tel2.png');
            this.load.image('tel3', 'assets/tel3.png');
            this.load.image('star2', 'assets/star2.png');

            this.load.image('currentletter', 'assets/currentletter.png');
            this.load.image('valid', 'assets/valid.png');
            this.load.image('diamond', 'assets/diamond.png');
            //preload menu

            this.load.spritesheet('crp1', 'assets/capred.png', 147, 147);
            this.load.spritesheet('crp2', 'assets/capblue.png', 147, 147);

            this.load.image('backbutton', 'assets/backbutton.png');
            //Films
            this.game.load.video('introfilm', 'assets/films/test.mp4');

            this.load.image('knoppenscore', 'assets/knoppenscore.png');
            this.load.image('knoppenscorewhite', 'assets/knoppenscorewhite.png');

            this.load.image('scorebg', 'assets/scorebg.png');
            this.load.image('scoredudes', 'assets/scoredudes.png');

            this.load.image('ground', 'assets/ground.png');
            this.load.image('gameover', 'assets/gameover.png');
            this.load.spritesheet('explosion', 'assets/explosion.png', 128, 128);
            this.load.spritesheet('enemy', 'assets/enemy.png', 50, 96);
            this.load.spritesheet('coin', 'assets/coin.png', 50, 50);
            this.load.image('p1p2', 'assets/p1p2.png');

            //platformer
            this.load.image('sky', 'assets/sky.png');
            this.load.image('platform', 'assets/platform.png');
            this.load.image('platformground', 'assets/platformground.png');
            this.load.image('star', 'assets/star.png');
            this.load.image('p1life', 'assets/p1life.png');
            this.load.image('p2life', 'assets/p2life.png');
            this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
            this.load.image('pbbg2', 'assets/pbbg.png');
            this.load.image('pbbg3', 'assets/pbbg2.png');
            this.load.image('lifeup', 'assets/lifeup.png');

            // waste
            this.load.image('duck1', 'assets/duck1.png');
            this.load.image('duck2', 'assets/duck2.png');
            this.load.image('duck3', 'assets/duck3.png');
            // containers
            this.load.image('cont1', 'assets/cont1.png');
            this.load.image('cont2', 'assets/cont2.png');
            this.load.image('cont3', 'assets/cont3.png');


            //scoring
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.loadResources();

        },

        loadResources: function() {
            // load your assets here
        },

        create: function() {

        },

        update: function() {
            // if (!!this.ready) {
            //this.game.state.start('screensaver');
            // }
        },

        onLoadComplete: function() {
            // this.ready = true;
            this.game.state.start('screensaver');
        }
    };

    window['ewaste'] = window['ewaste'] || {};
    window['ewaste'].Preloader = Preloader;
}());