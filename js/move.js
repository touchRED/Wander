//canvas init
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var keysDown = {};

var height;

var socket = io.connect('http://localhost:8080/');

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	switch(e.keyCode){
		case 38:
		jump();
		break;
	}
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	if(e.keyCode == 38){
		keyisUp = true;
	}
}, false);

function update(modifier){
	clear();

	heightCheck();

	//onGround();
	
	/*if (38 in keysDown) { // Player holding up
		jump();
		//keyisUp = false;
	}*/

	if(hero.y > height){
		hero.y = hero.y - 6;
	}
	if (37 in keysDown) { // Player holding left
	 hero.x += hero.speed*modifier;
	}
	if (39 in keysDown) { // Player holding right
	 hero.x -= hero.speed*modifier;
	}

	//socket.emit('move', {'x': hero.x, 'y': hero.y});
}

/*socket.on('moving', function (data){
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,50,50);
});*/

function onGround(){
	if(hero.y == -195 || !keyisUp){
		return true;
	}
	if(hero.y == -105){
		return false;
	}
}

var jump = function(){
	for (var i = 100; i >= 0; i -= 0.5) {
		setTimeout(function(){
			hero.y -= i;
		},30);
	};
};

function heightCheck() {
	if(hero.x > -1200){
		height = -195;
	}
	/*if(hero.x < 1200){
		height = -170;
	}*/
};