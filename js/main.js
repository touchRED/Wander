//canvas init
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var bgImage = new Image();
bgImage.src = 'wander2.png'
//time
var then = Date.now();
//canvas height

var hero = {
	speed: 400,
	x:0,
	y:0
};

var keysDown = {};

//var keyisUp;

addEventListener("keydown", function (e) {
	//console.log(e.keyCode);
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	if(e.keyCode == 38){
		//keyisUp = true;
	}
}, false);

var reset = function () {
	hero.x = -800;
	hero.y = -195;
};

/*var resize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};*/

var update = function (modifier){
	clear();
	
	if (38 in keysDown) { // Player holding up
	 jump();
	}
	//if (40 in keysDown) { // Player holding down
	// hero.y -= hero.speed*modifier;
	//}
	if (37 in keysDown) { // Player holding left
	 hero.x += hero.speed*modifier;
	}
	if (39 in keysDown) { // Player holding right
	 hero.x -= hero.speed*modifier;
	}

	

	//bounds

	/*if (38 in keysDown && Collision) { // Player holding up
	 console.log("BAM");
	}
	if (40 in keysDown && Collision) { // Player holding down
	 console.log("BAM");
	}
	if (37 in keysDown && Collision) { // Player holding left
	 console.log("BAM");
	}
	if (39 in keysDown && Collision) { // Player holding right
	 console.log("BAM");
	}*/
	//console.log(keyisUp);
};

var render = function () {
	ctx.drawImage(bgImage, hero.x, hero.y);
	ctx.fillStyle = "#000000";
	ctx.fillRect(479,282,50,50);
};

var clear = function (){
	ctx.clearRect(0,0,canvas.width,canvas.height)
}

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	console.log(hero.x,",",hero.y);
};

var Collision = function (){
	if(hero.x >= 615){
		return true;
	}else{
		return false;
	}
	if(hero.y  <= -555){
		return true;
	}else{
		return false;
	}
	if(hero.x  <= -775){
		return true;
	}else{
		return false;
	}
	if(hero.y  >= 295){
		return true;
	}else{
		return false;
	}
};

var jump = function(){
	for (var i = 4; i >= 0; i -= 0.5) {
		hero.y += i;
	};
	setTimeout(function(){
		for (var i = 0; i <= 4; i += 0.5) {
		hero.y -= i;
		};
	}, 100);
};


ctx.drawImage(bgImage,0,0);
reset();
setInterval(main, 20);
//window.onresize = resize;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
