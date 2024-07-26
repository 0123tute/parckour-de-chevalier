let ball;
let wall;
let wall2;
let wall3;
let wall4;
let floor;
let ammo;
let ennemy;
let attack;
function setup() {
	new Canvas(500, 500);
// ennemy
ennemy = new Sprite(450,50)
//structure
	wall = new Sprite(0,10,1000,50, "static")
	wall2 = new Sprite(0,50,50,1000, "static")
    floor = new Sprite(0,500,1000,50, "static")
    wall3 = new Sprite(500,50,50,1000,"static")
    ammo = new Group();
	ammo.diameter = 10
    ammo.colors = "yellow";
	ammo.life = 200

	ennemy.overlap(ammo, attack);

	
	

	floor.collider = 'static';
	ball = new Sprite();
	ball.diameter = 50;
	ball.velocity.y = 3
    ennemy.velocity.y = 3
    ennemy.healf = 12
	ennemy.overlap
	let jumpSound;
}
let jumpSound;
function preload() {
	jumpSound = loadSound("sounds/jump.wav");

}
function draw() {
	background('skyblue');
    ennemy.velocity.y = 3



	if (ennemy.healf === 0)ennemy.remove();
	
    if (ball.collides(floor)){
		ball.velocity.y = 0
	}
	 else ball.velocity.y = 3
	
    if (mouse.pressed()){
		ammo = new Sprite()
		ammo.diameter = 10
		
	}		
	if (kb.pressing("left")) {
		ball.x = ball.x-3
	}
	if (kb.pressed("up")) {
		ball.velocity.y = 0
		ball.y = ball.y-100
		jumpSound.play()
	}
	if (kb.pressing("right")) {
		ball.x = ball.x+3
	 }
	 if (ball.y <=300){
		ball.velocity.y = 3
	 }
	 
	}
	

