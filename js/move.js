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

	if(hero.y > height){
		hero.y = hero.y - 6;
	}
	if (37 in keysDown) { // Player holding left
	 hero.x += hero.speed*modifier;
	}
	if (39 in keysDown) { // Player holding right
	 hero.x -= hero.speed*modifier;
	}
}

function onGround(){
	if(hero.y == -195 || !keyisUp){
		return true;
	}
	if(hero.y == -105){
		return false;
	}
}

var jump = function(){
	for (var i = 40; i >= 0; i -= 0.5) {
		setInterval(function(){
			hero.y += i;
		},1000);
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