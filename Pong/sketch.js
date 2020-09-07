var ballSpeed = 1; 
var pos = 300;
var y = 305;
var y_1 = 200;
var y_2 = 200; 
var y_3 = 10; 
var x_1 = 2; 



function setup() {
	createCanvas(600, 610);
}

function drawText(text, y, x, color){
		ctx.fillStyle = color; 
		ctx.font = "75px fantasy";
		ctx.fillText(text, x, y); 
}


function draw() {
	var y_3 = 10;
	var d = 1;
	background(0);
	
	
	
	// for  (i = 0; i < 20; i++){
	// 	stroke(255);
	// 	rect(300, y_3, 5, 20);
	// 	y_3 = y_3 + 30;
	// }

	
	var rect1 = {x: 20, y: y_1, width: 20, height:200}; // x: 52 y: y_1 > y > y_1 - 200
	var rect2 = {x: 560,y: y_2, width: 20, height: 200}; // x: 549  , y: y_2 > y > y_2 - 200 
		 
	rect(rect1.x, rect1.y, 20, 200);
	rect(rect2.x, rect2.y, 20, 200);
	

	if (keyIsDown(UP_ARROW)){
		y_2 -= 2;
	}else if(keyIsDown(DOWN_ARROW)){
		y_2 += 2;
	}
	if (keyIsDown(87)){ 
		y_1 -= 2;
		console.log(y_1);
	}else if(keyIsDown(83)){
		y_1 += 2;
		console.log(y_1);
	}

	stroke(255);
	ellipse(pos, y, 20, 20); 
	pos = pos + x_1;  
	// console.log(y);	
	
	// let x_1 = 2
	
	// Not Working
// 	if(pos >= 549 && y_2 < y < y_2 + 200){ 
// 		pos = pos+x_1;
// 		x_1 = -2; 
// 	} 
// 	if(pos <= 49 && y_1 < y < y_1 + 200){
// 		pos = pos+x_1;
// 		x_1 = 2; 
// 	}
}


	