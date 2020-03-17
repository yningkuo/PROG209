/*function animateScript() {
	document.getElementById("image").style.backgroundPosition = 
	'-32px 0px';}*/


/*var tID; //we will use this variable to clear the setInterval()
function animateScript(){
	var    positionx = 0; //start position for the image slicer
	var positiony = 0;
	const  interval = 100; //100 ms of interval for the setInterval()
	 setInterval(function(){
		 
		document.getElementById("image").style.backgroundPosition = `${positionx}px ${positiony}px`; 
	if (positiony <= 64)
		{ positiony = positiony + 32;
			//positiony = positiony + 32;
		}
		else{ 
		positiony = 0; 
		//positiony = 64;
		}; }, interval);}*/

function playSound() {
	var sound = document.getElementById("audio");
	sound.play();
}
function playSound2() {
	var sound = document.getElementById("audio2");
	sound.play();
}
function playSound3() {
	var sound = document.getElementById("audio3");
	sound.play();
}

var count = 65 ;

var counter2 = setInterval ( timer ,  1000 ) ;  
		
function timer ( ) 
{ 
	count = count -1 ; 
	if  ( count <=  0 ) 
	{ 
			 
	count = "Game Over";
	clearInterval (counter2) ; 
	playSound3();
	main = false;
	return; 
	}
		
}


// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/newbackground.png";

// Hero image
var heroReady = false;
var heroImage =new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/heroSprite2.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/apple.png";

// Enemy image
var enemy1Ready = false;
var enemy1Image = new Image();
enemy1Image.onload = function () {
	enemy1Ready = true;
};
enemy1Image.src = "images/enemySprite.png";
// obstacle image
var obstacleReady = false;
var obstacleImage = new Image();
obstacleImage.onload = function () {
	obstacleReady = true;
};
obstacleImage.src = "images/obstacle.png";
// obstacle2 image
var obstacle2Ready = false;
var obstacle2Image = new Image();
obstacle2Image.onload = function () {
	obstacle2Ready = true;
};
obstacle2Image.src = "images/obstacle.png";
// fire image
var fireReady = false;
var fireImage = new Image();
fireImage.onload = function () {
	fireReady = true;
};
fireImage.src = "images/fire.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monster = {};
var enemy1 = {};
var obstacle = {};
var obstacle2 = {};
var fire = {};
var monstersCaught = 0;
var enemysCaught = 0;
var startTime=new Date();

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 94));
	monster.y = 32 + (Math.random() * (canvas.height - 94));

	enemy1.x = 32 + (Math.random() * (canvas.width - 64));
	enemy1.y = 32 + (Math.random() * (canvas.height - 64));

	obstacle.x = 32 + (Math.random() * (canvas.width - 64));
	obstacle.y = 32 + (Math.random() * (canvas.height - 64));

	obstacle2.x = 32 + (Math.random() * (canvas.width - 64));
	obstacle2.y = 32 + (Math.random() * (canvas.height - 64));

	fire.x = 32 + (Math.random() * (canvas.width - 64));
	fire.y = 32 + (Math.random() * (canvas.height - 64));
};
var srcX;
var srcY;

// Update game objects
var update = function (modifier) { 

	curFrame = ++curFrame % frameCount;
    srcX = curFrame * width;
	ctx.clearRect(hero.x, hero.y, width, height);
	
	if(enemy1.x - hero.x > 0){
		enemy1.x = enemy1.x - Math.random()*2;
	}
	else{
		enemy1.x = enemy1.x + Math.random()*2;
	}
	if(enemy1.y - hero.y > 0){
		enemy1.y = enemy1.y - Math.random()*2;
	}
	else{
		enemy1.y = enemy1.y + Math.random()*2; 
	}

	//obstacle move
	if( obstacle.x < 440){
		obstacle.x = obstacle.x + 1;
	}else {
		obstacle.x = obstacle.x - 1;
	}
	if( obstacle.y - hero.y > 0){
		obstacle.y = obstacle.y - 1;
	}else {
		obstacle.y = obstacle.y + 1;
	}
	//obstacle2 move
	if( obstacle2.x < 440){
		obstacle2.x = obstacle2.x + 1;
	}else{
		obstacle2.x = obstacle2.x - 1;
	}
	if( obstacle2.y - hero.y > 0){
		obstacle2.y = obstacle2.y - 1;
	}else {
		obstacle2.y = obstacle2.y + 1;
	}

	
	//monster.y = monster.y - Math.random()*Math.random() + Math.random()*Math.random();
	if (38 in keysDown) { // Player holding up
		if(hero.y > 30){
			hero.y -= hero.speed * modifier;

		}
		
	}
	if (40 in keysDown) { // Player holding down
		if(hero.y < 420){
			hero.y += hero.speed * modifier;
		}
		
	}
	if (37 in keysDown) { // Player holding left
		if(hero.x > 20){
			hero.x -= hero.speed * modifier;
		}
		
	}
	if (39 in keysDown) { // Player holding right
		if(hero.x < 460){
			hero.x += hero.speed * modifier;
		}
		
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		playSound();
		reset();
	}
	if (
		hero.x <= (enemy1.x + 32)
		&& enemy1.x <= (hero.x + 32)
		&& hero.y <= (enemy1.y + 32)
		&& enemy1.y <= (hero.y + 32)
	) {
		++enemysCaught;
		playSound2();
		reset();
		
	}
	//obstacle 
	if (
		hero.x <= (obstacle.x + 32)
		&& obstacle.x <= (hero.x + 32)
		&& hero.y <= (obstacle.y + 32)
		&& obstacle.y <= (hero.y + 32)
	) {
		++enemysCaught;
		playSound2();
		reset();
	}
	//obstacle2
	if (
		hero.x <= (obstacle2.x + 32)
		&& obstacle2.x <= (hero.x + 32)
		&& hero.y <= (obstacle2.y + 32)
		&& obstacle2.y <= (hero.y + 32)
	) {
		++enemysCaught;
		playSound2();
		reset();
	}
	//fire
	if (
		hero.x <= (fire.x + 32)
		&& fire.x <= (hero.x + 32)
		&& hero.y <= (fire.y + 32)
		&& fire.y <= (hero.y + 32)
	) {
		++enemysCaught;
		playSound2();
		reset();
	}
};
var spriteWidth = 32;
var spriteHeight = 64;

var rows = 2;
var cols = 1;

var width = spriteWidth / cols;
var height = spriteHeight / rows;

var curFrame = 0;
var frameCount = 2;

//setInterval(function(){ alert("Hello"); }, 300);
// Draw everything
var counter = 0;
var flag = 1;

var render = function () {
	if (counter<10){
		counter +=1;
	}
	else{
		counter = 0;
		flag += 1;
	}

	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		if(flag % 2 === 0 ){
			ctx.drawImage(heroImage, 0,0, width, height, hero.x, hero.y, width, height);

		}else{
			ctx.drawImage(heroImage, 0,32, width, height, hero.x, hero.y, width, height);
		}	
		}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	if (enemy1Ready) {
		if(flag % 2 === 0 ){
			ctx.drawImage(enemy1Image, 0,0, width, height, enemy1.x, enemy1.y, width, height);

		}else{
			ctx.drawImage(enemy1Image, 0,32, width, height, enemy1.x, enemy1.y, width, height);
		}
	}
	if (obstacleReady) {
		if(flag % 2 === 0 ){
			ctx.drawImage(obstacleImage, 0,0, width, height, obstacle.x, obstacle.y, width, height);
	
		}else{
			ctx.drawImage(obstacleImage, 0,32, width, height, obstacle.x, obstacle.y, width, height);
		}
	}
	if (obstacle2Ready) {
		if(flag % 2 === 0 ){
				ctx.drawImage(obstacle2Image, 0,0, width, height, obstacle2.x, obstacle2.y, width, height);
		
		}else{
			ctx.drawImage(obstacle2Image, 0,32, width, height, obstacle2.x, obstacle2.y, width, height);
		}
	}

	if (fireReady) {
		if(flag % 2 === 0 ){
				ctx.drawImage(fireImage, 0,0, width, height, fire.x, fire.y, width, height);
		
		}else{
			ctx.drawImage(fireImage, 0,32, width, height, fire.x, fire.y, width, height);
		}
	}


	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Score: " + monstersCaught, 32, 32);
	ctx.fillText("Failed Attempts: " + enemysCaught, 32, 64);
	ctx.fillText("Time: " + count, 32, 96);
	


}



// The main game loop
var main = function () {
	
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
