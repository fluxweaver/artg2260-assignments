var thicc = 1;

function setup() {
	createCanvas(700, 500);
	stroke(0);
    strokeWeight(thicc);
    rect(0,0, 699, 499);
	}


function draw(){
  	if (mouseIsPressed == true) {
    	line(mouseX, mouseY, pmouseX, pmouseY);  
    }
}

function keyPressed() {
	if (key == '1' || key == '!') {
	  stroke(0, 0, 0);
	} else if (key == '2' || key == '@') {
	  stroke(100, 100, 100);
	} else if (key == '3' || key == '#') {
	  stroke(150, 150, 150);
	} else if (key == '4' || key == '$') {
	  stroke(225, 225, 225);
	} else if (key == '5' || key == '%') {
	  stroke(255, 255, 255);
	} else if (keyCode == UP_ARROW){
      thicc*=2;
      strokeWeight(thicc);
    } else if (keyCode == DOWN_ARROW){
      thicc/=2;
      strokeWeight(thicc);
    } else if (key == "s" || key == "S"){
    	saveCanvas('artsy', 'png');
    } else if (keyCode == BACKSPACE){
    	setup();
    }

}