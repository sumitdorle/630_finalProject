//var RoBlockWar = RoBlockWar || { };
var scanDistance
enemies = [];
EnemyTank = function (index, game, bullets) {

    var x = game.world.randomX;
    var y = game.world.randomY;

    this.game = game;
    this.health = 3;
    //this.player = player;
    this.bullets = bullets;
    this.fireRate = 1000;
    this.nextFire = 0;
    this.alive = true;
 
    this.shadow = game.add.sprite(x, y, 'enemy', 'shadow');
    this.tank = game.add.sprite(x, y, 'enemy', 'tank1');
    this.turret = game.add.sprite(x, y, 'enemy', 'turret');

    this.shadow.anchor.set(0.5);
    this.tank.anchor.set(0.5);
    this.turret.anchor.set(0.3, 0.5);

    this.tank.name = index.toString();
    game.physics.enable(this.tank, Phaser.Physics.ARCADE);
    this.tank.body.immovable = false;
    this.tank.body.collideWorldBounds = true;
    this.tank.body.bounce.setTo(0.8,0.8);

    this.tank.angle = game.rnd.angle();

    game.physics.arcade.velocityFromRotation(this.tank.rotation, 200, this.tank.body.velocity);

};

EnemyTank.prototype.damage = function() {

    this.health -= 1;

    if (this.health <= 0)
    {
        this.alive = false;

        this.shadow.kill();
        this.tank.kill();
        this.turret.kill();

        return true;
    }

    return false;

}

EnemyTank.prototype.update = function() {

    this.shadow.x = this.tank.x;
    this.shadow.y = this.tank.y;
    this.shadow.rotation = this.tank.rotation;

    this.turret.x = this.tank.x;
    this.turret.y = this.tank.y;
    //this.turret.rotation = this.game.physics.arcade.angleBetween(this.tank, this.player);
    
    for(i=0;i<enemies.length;i++)
    {
    	if ((this.tank.name!=enemies[i].tank.name)&&
    		(this.game.physics.arcade.distanceBetween(this.tank, enemies[i].tank) < 200))
    	{
    		game.physics.arcade.collide(this.tank, enemies[i].tank);
    		this.turret.rotation = this.game.physics.arcade.angleBetween(this.tank, enemies[i].tank);
    		if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
            {
                this.nextFire = this.game.time.now + this.fireRate;

                var bullet = this.bullets.getFirstDead();

                bullet.reset(this.turret.x, this.turret.y);

                bullet.rotation = this.game.physics.arcade.moveToObject(bullet, enemies[i].tank, 500);
                game.physics.arcade.overlap(this.bullets, enemies[i].tank, bulletHitEnemy, null, this);
            }
    	}
    }
    /*if (this.game.physics.arcade.distanceBetween(this.tank, this.player) < 300)
    {
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
        {
            this.nextFire = this.game.time.now + this.fireRate;

            var bullet = this.bullets.getFirstDead();

            bullet.reset(this.turret.x, this.turret.y);

            bullet.rotation = this.game.physics.arcade.moveToObject(bullet, this.player, 500);
        }
    }*/

};

function Main(blocklyCode)
{
alert("hhh");
	var count;
	//test();
	//need to check the blockly code in workspace
	/*for(count = 0;count < robots;count++)
	{
		
	}*/
}
var game = new Phaser.Game(610, 480, Phaser.AUTO, 'gameArea', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.atlas('tank', 'assets/tanks.png', 'assets/tanks.json');
    game.load.atlas('enemy', 'assets/enemy-tanks.png', 'assets/tanks.json');
    //game.load.image('logo', 'assets/logo.png');
    game.load.image('bullet', 'assets/bullet.png');
    game.load.image('earth', 'assets/scorched_earth.png');
    game.load.spritesheet('kaboom', 'assets/explosion.png', 64, 64, 23);
}

var land;

var shadow;
var tank;
var turret;

var enemies;
var enemyBullets;
var enemiesTotal = 0;
var enemiesAlive = 0;
var explosions;

var logo;

var currentSpeed = 0;
var cursors;

var bullets;
var fireRate = 100;
var nextFire = 0;

function create ()
{
	//  Resize our game world to be a 2000 x 2000 square
    game.world.setBounds(-400, -400, 600, 500);

    //  Our tiled scrolling background
    land = game.add.tileSprite(0, 0, 800, 600, 'earth');
    land.fixedToCamera = true;

    
    //  The enemies bullet group
    enemyBullets = game.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(100, 'bullet');
    
    enemyBullets.setAll('anchor.x', 0.5);
    enemyBullets.setAll('anchor.y', 0.5);
    enemyBullets.setAll('outOfBoundsKill', true);
    enemyBullets.setAll('checkWorldBounds', true);

    //  Create some baddies to waste :)
    //enemies = [];

    enemiesTotal = 2;
    enemiesAlive = 2;

    for (var i = 0; i < enemiesTotal; i++)
    {
        enemies.push(new EnemyTank(i, game, tank, enemyBullets));
    }
    //  Explosion pool
    explosions = game.add.group();

    for (var i = 0; i < 10; i++)
    {
        var explosionAnimation = explosions.create(0, 0, 'kaboom', [0], false);
        explosionAnimation.anchor.setTo(0.5, 0.5);
        explosionAnimation.animations.add('kaboom');
    }

    
    cursors = game.input.keyboard.createCursorKeys();
}

function removeLogo () {

    game.input.onDown.remove(removeLogo, this);
    logo.kill();

}

function update()
{

    enemiesAlive = 0;
    
    for (var i = 0; i < enemies.length; i++)
    {
        if (enemies[i].alive)
        {
            enemiesAlive++;
            //game.physics.arcade.collide(tank, enemies[i].tank);
            //game.physics.arcade.overlap(bullets, enemies[i].tank, bulletHitEnemy, null, this);
            enemies[i].update();
        }
    }
}

function bulletHitEnemy (tank, bullet) {
alert("Hi");
    bullet.kill();

    var destroyed = enemies[tank.name].damage();

    if (destroyed)
    {
        var explosionAnimation = explosions.getFirstExists(false);
        explosionAnimation.reset(tank.x, tank.y);
        explosionAnimation.play('kaboom', 30, false, true);
    }

}

function fire () {

    if (game.time.now > nextFire && bullets.countDead() > 0)
    {
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstExists(false);

        bullet.reset(turret.x, turret.y);

        bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, game.input.activePointer, 500);
    }

}

function render () {

    // game.debug.text('Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.length, 32, 32);
    game.debug.text('Enemies: ' + enemiesAlive + ' / ' + enemiesTotal, 32, 32);

}

function test()
{
	game.load.atlas('tank', 'assets/tanks.png', 'assets/tanks.json');
    game.load.atlas('enemy', 'assets/enemy-tanks.png', 'assets/tanks.json');
}