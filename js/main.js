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
	x:-800,
	y:-195,
	jspeed: 4
};

var keyisUp;

/*var reset = function () {
	hero.x = -800;
	hero.y = -195;
};*/

/*var resize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};*/

var socket = io.connect('http://localhost:8080/');

/*var player = function (data){
	ctx.fillStyle = "#000000";
	var sqr_x = (data.x * -1) + (window.innerWidth+hero.x);
	//ctx.fillRect(sqr_x,282,50,50);
	//clear();
}*/

var render = function () {
	ctx.drawImage(bgImage, hero.x, hero.y);
	ctx.fillStyle = "#000000";
	ctx.fillRect(window.innerWidth/2,282,50,50);

	//socket.on('moving', player);
	
	var square_x;

	//console.log(square_x);
	
	ctx.fillRect(square_x,282,50,50);
};

var player = function (x_spot){
	var x_pos = x_spot;
	ctx.fillStyle = "#000000";
	ctx.fillRect(x_pos,282,50,50);
}

socket.on('moving', function (data){
	ctx.fillStyle = "#000000";
	var sqr_x = (data.x * -1) + (320+hero.x);
	player(sqr_x);
	//render.square_x = sqr_x;
	//ctx.fillRect(sqr_x,282,50,50);
	//clear();
});

/*setInterval(function(){
	console.log(render.square_x);
},1000)*/

var clear = function (){
	ctx.clearRect(0,0,canvas.width,canvas.height)
};

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	socket.emit('move', {'x': hero.x, "y": hero.y});

	//console.log(hero.x,",",hero.y);
};

/*setInterval(function(){
	socket.emit('move', {'x': hero.x, "y": hero.y});
}, 1);*/

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
setInterval(main, 20);
//window.onresize = resize;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
