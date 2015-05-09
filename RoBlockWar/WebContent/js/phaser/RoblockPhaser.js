/**
 * 
 */

var game = new Phaser.Game(607, 500, Phaser.AUTO, 'phaserDiv', { preload: preload, create: create, update: update });

var tank, turret, earth;

var up = false;
var down = false;
var left = false;
var right = false;

var moveFactor = 0;

function preload()
{
	game.load.atlas('tank', './assets/tank/tanks.png', './assets/tank/tanks.json');
	game.load.image('earth_arena', './assets/earth.png');
}

function create()
{
	//setting world bounds
	game.world.setBounds(0, 0, 607, 500);
	
	//adding land
	earth = game.add.tileSprite(0,0,607,500, 'earth_arena');
	
	
	//adding player tank
	tank = game.add.sprite(303, 250, 'tank', 'tank1');
    tank.anchor.setTo(0.5, 0.5);
    tank.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);
    
    //adding turret to tank
    turret = game.add.sprite(tank.x, tank.y, 'tank', 'turret');
    turret.anchor.setTo(0.3, 0.5);
    
    //adding physics to tank
    game.physics.enable(tank, Phaser.Physics.ARCADE);
    tank.body.collideWorldBounds = true;
}

function update()
{
	if(up)
	{
		tank.body.velocity.y = -moveFactor;
		setTimeout(function()
		{
			up = false;
			tank.body.velocity.y = 0;
			setTimeout(function(){execute = true;}, 10);
		}, 300);
	}
	else if(down)
	{
		tank.body.velocity.y = moveFactor;
		setTimeout(function()
		{
			down = false;
			setTimeout(function(){execute = true;}, 10);
		}, 100);
	}
	else if(left)
	{
		tank.body.velocity.x = -moveFactor;
		setTimeout(function()
		{
			left = false;
			setTimeout(function(){execute = true;}, 10);
		}, 300);
	}
	else if(right)
	{
		tank.body.velocity.x = moveFactor;
		setTimeout(function()
		{
			right = false;
			setTimeout(function(){execute = true;}, 10);
		}, 300);
	}
	
	turret.x = tank.x;
	turret.y = tank.y;
}

function moveUp(value)
{
	moveFactor = value;
	up = true;
	execute = false;
}