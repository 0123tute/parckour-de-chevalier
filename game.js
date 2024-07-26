let playerSheet
let player
let bricks
let slimeG
let slimeGSheet
let win
let level
function preload(){
playerSheet = loadImage('sprites/knight.png');
worldSheet = loadImage("Sprites/world_tileset.png")
slimeGSheet = loadImage("Sprites/slime_green.png")


player = new Sprite(30, 1108, 14, 13)
player.spriteSheet = playerSheet;
player.anis.offset.y = -3
player.addAnis({
    run:{w: 32, h: 32, row: 2, frames: 16, frameDelay: 6},
    stand:{ w: 32, h: 32, row: 0, frames: 4, frameDelay: 6},
	jump:{w: 32, h: 32, row: 2, col: 4},
    // slime
})
	slimeG = new Sprite(280,1108,13,13)
	slimeG.spriteSheet = slimeGSheet
	slimeG.addAnis({
		stands: { w: 24, h: 24, row: 0, frames: 8, frameDelay: 6},
		hurt: { w: 24, h: 24, row: 2, frames: 4, frameDelay: 10}
	})
    slimeG.changeAni("stands")

  player.changeAni("stand")
}
function setup(){
new Canvas( 1000, 1000, "pixelated x4");
world.gravity.y = 9.81;
grass = new Group();
	grass.collider = "static";
	grass.spriteSheet = worldSheet
	grass.addAni({ w: 16, h: 16, row: 0, col: 0});
	grass.tile = "g"

	grassT = new Group();
	grassT.collider = "none";
	grassT.spriteSheet = worldSheet
	grassT.addAni({ w: 16, h: 16, row: 0, col: 0});
	grassT.tile = "m"


	lader = new Group();
	lader.collider = "none";
	lader.spriteSheet = worldSheet
	lader.addAni({ w: 16, h: 16, row: 3, col: 9})
	lader.tile = "l"

	pierre = new Group();
	pierre.collider = "static"
	pierre.spriteSheet = worldSheet
	pierre.addAni({w: 16, h: 16, row:0, col: 8})
	pierre.tile = "p"

    pierreT = new Group();
	pierreT.collider = "none"
	pierreT.spriteSheet = worldSheet
	pierreT.addAni({w: 16, h: 16, row:0, col: 8})
	pierreT.tile = "t"

	sable = new Group();
	sable.collider = "static"
    sable.spriteSheet = worldSheet
	sable.addAni({w: 16, h: 16, row:1, col: 2})
	sable.tile = "r"

	sableT = new Group();
	sableT.collider = "none"
    sableT.spriteSheet = worldSheet
	sableT.addAni({w: 16, h: 16, row:1, col: 2})
	sableT.tile = "n"


	level = 1

	win = new Sprite(500,1200,16,16);
	win.spriteSheet = worldSheet
	win.addAnis({stands: { w: 16, h: 16, row: 0, frames: 6, frameDelay: 20}}
	) // monde
tiles = new Tiles
(map1, 0, 100, 16, 16);

player.rotationLock = true
player.jumpTimer = 0;
slimeG.rotationLock = true
win.rotationLock = true
}



function draw(){
    background("skyblue")
	camera.x = player.x;
	camera.y = player.y;
	camera.zoom = 6

	if (kb.pressing('right')) {
        player.mirror.x = false;
        player.vel.x = 2;
        player.changeAni('run');
    } else if (kb.pressing('left')) {
        player.mirror.x = true;
        player.vel.x = -2;
        player.changeAni('run');
    } else {
        if (player.anis.name !== 'roll' || 
            player.anis.name !== 'hurt' || 
            player.anis.name !== 'dead') {
                player.changeAni('stand');
	}
	} 
	if (kb.presses("up") && player.colliding(tiles)) {
		player.changeAni("jump");
		player.vel.y = -3
		player.jumpTimer = 0
		player.jumpTimer++
	}  else if (kb.presses("up") && player.jumpTimer === 1) {
		player.jumpTimer = 0;
		player.vel.y =-3;
	} if(player.collides(win)){
		if(level === 1){
		tiles.remove();
		tiles = new Tiles(map2,0,0,16,16);
		player.y = 416
		player.x = 30
		win.y = -16
		win.x = 30
		level = 2
	}
	else if(level === 2){
		tiles.remove();
		tiles = new Tiles(map3,0,0,16,16);
		player.y = 560
		player.x = 30
		win.y = -16
		win.x = 30
		level = 3
	}
	else if(level === 3){
			tiles.remove();
		tiles = new Tiles(win_map,0,0,16,16);
		player.y = 112
		player.x = 30
		win.y = 1000
		}}
}
