//canvas init
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var bgImage = new Image();
bgImage.src = 'img/wander_flat.png'
//time
var then = Date.now();
//canvas height

var hero = {
	speed: 400,
	x:0,
	y:0,
	jspeed: 4
};

var keyisUp;

var reset = function () {
	hero.x = -800;
	hero.y = -195;
};

/*var resize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};*/

var render = function () {
	ctx.drawImage(bgImage, hero.x, hero.y);
	ctx.fillStyle = "#000000";
	ctx.fillRect(window.innerWidth/2,282,50,50);
};

var clear = function (){
	ctx.clearRect(0,0,canvas.width,canvas.height)
};

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//console.log(hero.x,",",hero.y);
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
	/*setTimeout(function(){
		for (var i = 0; i <= 4; i += 0.5) {
		hero.y -= i;
		};
	}, 100);*/
};

var heightCheck = function() {
	if(hero.x > -1200){
		height = -195;
	}
	/*if(hero.x < 1200){
		height = -170;
	}*/
};


ctx.drawImage(bgImage,0,0);
reset();
setInterval(main, 20);
//window.onresize = resize;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
