/**
 * 
 */
var game = new Phaser.Game(607, 500, Phaser.AUTO, 'phaserDiv', { preload: preload, create: create, update: update });

var tank, turret, earth, enemies;

//variable to control the direction of tank movement
var up = false;
var down = false;
var left = false;
var right = false;

//Variable to turn on/off scanning in tank
var scan_stat = false;

//how fast the tank should move
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
		tank.angularDrag = 30;
		tank.angle = 90;
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
		tank.angle = -90;
		tank.body.velocity.y = moveFactor * 0.95;
		setTimeout(function()
		{
			down = false;
			tank.body.velocity.y = 0;
			setTimeout(function(){execute = true;}, 10);
		}, 300);
	}
	else if(left)
	{
		tank.angle = 180;
		tank.body.velocity.x = -moveFactor;
		setTimeout(function()
		{
			left = false;
			tank.body.velocity.x = 0;
			setTimeout(function(){execute = true;}, 10);
		}, 300);
	}
	else if(right)
	{
		tank.angle = 0;
		tank.body.velocity.x = moveFactor * 0.95;
		setTimeout(function()
		{
			right = false;
			tank.body.velocity.x = 0;
			setTimeout(function(){execute = true;}, 10);
		}, 300);
	}
	
	//Scan Function
	if(scan_stat)
	{
		
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

function moveDown(value)
{
	moveFactor = value;
	down = true;
	execute = false;
}

function moveRight(value)
{
	moveFactor = value;
	right = true;
	execute = false;
}

function moveLeft(value)
{
	moveFactor = value;
	left = true;
	execute = false;
}

function Scanning()
{
	scan_stat = true;
}