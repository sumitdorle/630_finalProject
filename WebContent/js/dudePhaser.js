/**
 *	Phaser Code 
 */
var game = new Phaser.Game(470, 480, Phaser.AUTO, 'gameArea');
var move_x=0, player, cursors;
var moveRight = false;
var moveLeft = false;
var countForward = 0;
var countBack = 0;
var execute = true;

var dudePhaser =
{
	preload : function()
	{
		game.load.image('sky', './assets/sky.png');
		game.load.image('star', './assets/star.png');
		game.load.spritesheet('dude','./assets/dude.png', 32, 48);
	},	
	
	create : function()
	{
		//Initalizing the physics of game
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//adding background
		game.add.sprite(0,0,'sky');
		
		//adding player
		player = game.add.sprite(32, game.world.height - 150, 'dude');
		
		game.physics.arcade.enable(player);
		
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		
		//animations for walking left and right
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right',[5, 6, 7, 8], 10, true);
		
		
	},

	update : function()
	{
		cursors = game.input.keyboard.createCursorKeys();
		
		player.body.velocity.x = 0;

	    if (moveLeft == true)
	    {
	        //  Move to the left
	    	player.animations.play('left');
	        player.body.velocity.x = move_x;
	        //setTimeout(function(){moveLeft = false;}, 300);
	    }
	    else if (moveRight == true)
	    {
	    	//moveRight = false;
	        //  Move to the right
	    	player.animations.play('right');
	        player.body.velocity.x = move_x;
	        //setTimeout(function(){moveRight = false;}, 300);
	    }
	    else
	    {
	        //  Stand still
	        player.animations.stop();

	        player.frame = 4;
	    }

	    //  Allow the player to jump if they are touching the ground.
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	        player.body.velocity.y = -350;
	    }
	    
	}
};

game.state.add('main', dudePhaser);
game.state.start('main');