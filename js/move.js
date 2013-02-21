//canvas init
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var keysDown = {};

var height;

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

	if (hero.y > height) {
		hero.y = hero.y - 6;
	}
	if (37 in keysDown) { // Player holding left
		if (hero.x + hero.speed*modifier > 5){ // if player is at left side of map
			if(hero.squarex - hero.speed*modifier < 0){ // if player cube is at left side of screen
				hero.squarex -= 0;
			}
			else{
				hero.squarex -= hero.speed*modifier;
			}
		}
		else{
			if (hero.squarex > window.innerWidth/2){ // if player is not at center
				hero.squarex -= (hero.speed)*modifier;
			}
			else{
				hero.x += hero.speed*modifier;
			}
		}
	}
	if (39 in keysDown) { // Player holding right
		if (hero.x - hero.speed*modifier < -1560){ // if player is at right side of map
			if(hero.squarex + hero.speed*modifier > (window.innerWidth - 45)){ // if player cube is at right side of screen
				hero.squarex += 0;
			}
			else{
				hero.squarex += hero.speed*modifier;
			}
		}
		else{
			if (hero.squarex < window.innerWidth/2){ // if player cube is at right side of screen
				hero.squarex += (hero.speed)*modifier;
			}
			else{
				hero.x -= hero.speed*modifier;
			}
		}
	}
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