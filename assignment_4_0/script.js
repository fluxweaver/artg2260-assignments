let b;
let encouragement = ["woo!", "go you!", "score!", "GOAL!"];

function setup() {
    createCanvas(700, 700);
  	b = new Box(); 	
  	noStroke();
}

function draw() {
  	background(66, 130, 68);
  	b.display();		
  	b.move();			
  	b.bounce();	
  	b.teleportGoal();
  	b.kickY();
  	b.kickX();
  	b.newgame();
}


class Box {
	constructor(){
		this.x = 350;
		this.y = 500;
		this.diameter = 50;
		this.xSpeed = 0;  
		this.ySpeed = 0; 
	  this.score = 0;
	}

	display() {
	  textSize(12);
	  fill(231, 255, 127)
	  rect(190, 0, 320, 200)
	  rect(0, 495, 700, 10)
	  ellipse(350, 500, 70, 70)
	  fill(66, 130, 68)
	  rect(200, 0, 300, 190)
	  ellipse(350, 500, 50, 50)
	  fill(255)
	  rect(0, 0, 100, 50)
	  rect(600, 0, 100, 50)
	  fill(0)
	  rect(200, 0, 300, 20)
	  text("reset", 637, 25)
	  text("score: " + this.score, 25, 25)
	  fill(255)
		ellipse(this.x, this.y, this.diameter, this.diameter); 
	}

	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;	
  	}
  	
  teleportGoal() {
    if (this.y <= 0 && this.x >= 200 && this.x <= 500) {
		  this.y = 500;
		  this.x = 350;
		  this.xSpeed = 0;
		  this.ySpeed = 0;
		  this.score += 1;
		  textSize(32);
		  text(encouragement[0], random(0, 100), random(100, 600));
		  text(encouragement[1], random(0, 100), random(100, 600));
		  text(encouragement[2], random(500, 600), random(100, 600));
		  text(encouragement[3], random(500, 600), random(100, 600));
		  } else if (this.y <= 0 && (this.x < 200 || 
		  this.x > 500)) {
      this.ySpeed *= -1;
      
		  }
}

	bounce(){
		if (this.x+this.diameter/2 >= width|| 
		this.x-this.diameter/2 <= 0){    
			this.xSpeed *= -1;   
		}
		if (this.y+this.diameter/2 >= height) {    
			this.ySpeed *= -1;
		}
	}

  kickY(){
  if( mouseY >= this.y - 75 && mouseY <= this.y + 75 
  &&  mouseX >= this.x - 35 && mouseX <= this.x + 35) {
    if (mouseIsPressed && mouseY > this.y){
     this.ySpeed += -1;
    } else if (mouseIsPressed && mouseY < this.y){
      this.ySpeed += 1;
    }    
  }
}

  kickX(){
  if( mouseX >= this.x - 75 && mouseX <= this.x + 75 
  && mouseY >= this.y - 35 && mouseY <= this.y + 35 ) {
    if (mouseIsPressed && mouseX > this.x){
      this.xSpeed += -1;
    } else if (mouseIsPressed && mouseX < this.x){
      this.xSpeed += 1;
    }
  }
}

  newgame(){
    if( mouseIsPressed && mouseX > 600 && mouseY < 50){
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.x = 350;
		  this.y = 500;
		  this.score = 0
    }
  }

  }