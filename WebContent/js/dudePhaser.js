/**
 *	Phaser Code 
 */
var game = new Phaser.Game(470, 480, Phaser.AUTO, 'gameArea');
var move_x=0, player, cursors;
var moveRight = false;
var moveLeft = false;
var isRunning = false;
var countForward = 0;
var countBack = 0;
var execute = true;
var player;
var time;

	 //var movedude = function(flag, callback){
	 //	alert("function called");
	 //	alert(player);
	 	
  //  	if (flag === "moveLeft"){
  //  		player.animations.play('left');
	 //    	player.body.velocity.x = move_x;
	 //    	isRunning = true;
	 //    	return callback(true);
  //  	}
  //  	else if (flag === "moveRight"){
		// 	player.animations.play('right');
		// 	player.body.velocity.x = move_x;
		// 	isRunning = true;
		// 	return callback(true);
  //  	}
  //  	return callback(false);
  //  }

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
		//cursors = game.input.keyboard.createCursorKeys();
		//player.body.velocity.x = 0;
		
		
		if (moveLeft && !isRunning)
		{
			alert("moveLeft " + moveLeft );
			alert("moveRight " + moveRight);
			
			dudePhaser.movedude("moveLeft", function(bool){
				alert("bool " + bool);
				if (bool){
					moveLeft = false;
					isRunning = false;
				}
			});
			
			//if (!isRunning)
				//dudePhaser.sleepFor(300);
			
			alert("moveLeft after " + moveLeft );
			alert("moveRight after " + moveRight)
		} 
		else if (moveRight && !isRunning){
			alert("moveLeft " + moveLeft );
			alert("moveRight " + moveRight);
			
			dudePhaser.movedude("moveRight", function(bool){
				alert(bool);
				if (bool){
					moveRight = false;
					isRunning = false;
				}
			});
			
			//if (!isRunning)
				//dudePhaser.sleepFor(300);
			
			alert("moveLeft after " + moveLeft );
			alert("moveRight after " + moveRight);
		}
		else if(!moveRight && !moveRight)
	    {
	        //Stand still
	        player.animations.stop();
	        player.frame = 4;
	    }

	}, 
	
	
	sleepFor : function( sleepDuration ){
	  alert("in sleeFor");
	  var now = new Date().getTime();
	  while(new Date().getTime() < (now + sleepDuration)){  } 
	},
	
 	move : function(direction, callback){
 		player.animations.play(direction);
	    player.body.velocity.x = move_x;
	    dudePhaser.sleepFor(300);
		callback(true);
 	},
 	
 	movedude : function(flag, callback){
	   alert("in movedude");
	   
	   	if (flag === "moveLeft"){
	     	dudePhaser.move("left", function(flag){
	     		if (flag){
		     		isRunning = true;
		     		callback(true);
	     		}
	     	});
	   	}
	   	else if (flag === "moveRight"){
			dudePhaser.move("right", function(flag){
	     		if (flag){
		     		isRunning = true;
		     		callback(true);
	     		}
	     	});
	   	}
		callback(false);
	}
};

game.state.add('main', dudePhaser);
game.state.start('main');