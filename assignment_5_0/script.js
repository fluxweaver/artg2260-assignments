let b;
let p = [];
let g;
let numPlayers = 6;
let encouragement = ["woo!", "go you!", "score!", "GOAL!"];

function setup() {
    createCanvas(700, 700);
  	b = new Box(); 	
    for (let i = 0; i < numPlayers; i++){  
    	p[i] = new Player(random(25, 675), random(50, 450));
    };
    g = new Goalie();
  	noStroke();
}

function draw() {
  	background(66, 130, 68);
  	b.display();		
  	b.move();			
  	b.bounce();	
  	b.teleportGoalYou();
  	b.teleportGoalThem();
  	b.kickY();
  	b.kickX();
  	for (let i = 0; i < p.length; i++) {
  	  if(p[i].overlaps(b)){
		    if(b.ySpeed < 0) {
		      b.ySpeed *= -.8;
		      b.xSpeed *= -.8;
		    } else if(b.ySpeed > 0) { 
		      b.xSpeed *= -.8;
		    }
  	  }
  	}
  	
  	for (let i = 0; i < p.length; i++){
    p[i].display();
  	p[i].move();
  	p[i].bounce();
  	p[i].newgame();
  	g.display();
  	g.move();			
  	g.bounce();	
  	if(g.overlaps(b)){
		    if(b.ySpeed < 0) {
		      b.ySpeed *= -.8;
		      b.xSpeed *= -.8;
		    } else if(b.ySpeed > 0) { 
		      b.xSpeed *= -.8;
		    }
  	  }
  	}
}

class Box {
	constructor(){
		this.x = 350;
		this.y = 500;
		this.diameter = 35;
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
	  ellipse(100, 0, 75, 100)
	  rect(0, 0, 100, 50)
	  ellipse(600, 0, 75, 100)
	  rect(600, 0, 100, 50)
	  fill(0)
	  rect(250, 0, 200, 20)
	  fill(0)
	  rect(250, 680, 200, 20)
	  text("reset", 637, 25)
	  text("score: " + this.score, 25, 25)
	  fill(255)
	  if( this.score <= 0) {
		  textSize(30)
		  fill(46, 96, 48)
		  text("^", 348, 45)
		  text("^", 348, 60)
		  text("Score goals here", 235, 80)
		  text("Don't get scored on", 220, 650)
		  textSize(25)
		  text("V", 348, 675)
		  textSize(20)
		  text("You can control the ball", 10, 525)
		  text("on this side", 10, 545)
		  text("Click and hold near the", 485, 525)
		  text("ball to move it", 565, 545)
		  text("Get to five", 10, 80)
		  text("Restart game", 575, 80)
		} else if ( this.score >= 0 && this.score < 5) {
		  textSize(30)
		  fill(46, 96, 48)
		  text("Guess you dont need instructions", 130, 350)
		}
		fill(255)
		ellipse(this.x, this.y, this.diameter, this.diameter); 
		if( this.score >= 5) {
		  textSize(60)
		  text("YOU WIN", 225, 350)
		  textSize(32);
		  text(encouragement[0], random(0, 100), random(100, 600));
		  text(encouragement[1], random(0, 100), random(100, 600));
		  text(encouragement[2], random(500, 600), random(100, 600));
		  text(encouragement[3], random(500, 600), random(100, 600));
		} else if( this.score <= -5) {
		  textSize(60)
		  text("YOU LOSE", 200, 350)
		}
	}

	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;	
  	}
  	
  teleportGoalYou() {
    if (this.y-this.diameter/2 <= 0 && this.x >= 250 && this.x <= 450) {
		  this.y = 500;
		  this.x = 350;
		  this.xSpeed = 0;
		  this.ySpeed = 0;
		  this.score += 1;
		  } else if (this.y <= 0 && (this.x < 250 || 
		  this.x > 450)) {
      this.ySpeed *= -1;
		  }
}

  teleportGoalThem() {
    if (this.y+this.diameter/2 >= 700 && this.x >= 250 && this.x <= 450) {
		  this.y = 500;
		  this.x = 350;
		  this.xSpeed = 0;
		  this.ySpeed = 0;
		  this.score += -1;
		  } else if (this.y >= 700 && (this.x < 250 || 
		  this.x > 450)) {
      this.ySpeed *= -1;
		  }
}

	bounce() {
		if (this.x+this.diameter/2 >= width|| 
		this.x-this.diameter/2 <= 0){    
			this.xSpeed *= -1;   
		}
		if (this.y+this.diameter/2 >= height) {    
			this.ySpeed *= -1;
		}
	}

  kickY() {
  if( mouseY >= this.y - 75 && mouseY <= this.y + 75 
  &&  mouseX >= this.x - 35 && mouseX <= this.x + 35
  && mouseY >=500) {
    if (mouseIsPressed && mouseY > this.y){
     this.ySpeed += -1;
    } else if (mouseIsPressed && mouseY < this.y){
      this.ySpeed += 1;
    }    
  }
}

  kickX() {
  if( mouseX >= this.x - 75 && mouseX <= this.x + 75 
  && mouseY >= this.y - 35 && mouseY <= this.y + 35 
  && mouseY >=500) {
    if (mouseIsPressed && mouseX > this.x){
      this.xSpeed += -1;
    } else if (mouseIsPressed && mouseX < this.x){
      this.xSpeed += 1;
    }
  }
}

}
  
class Player {
	constructor(x, y){
		this.x = random (126, 574);
		this.y = random(50, 400);
		this.diameter = 50;
		this.xSpeed = random(2,4);  
		this.ySpeed = random(0,2); 
	}
	
	display() {
	  fill(255, 255, 255, 150)
	  ellipse(this.x, this.y, this.diameter, this.diameter); 
	}
	
	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;	
  	}
  
  bounce() {
    if (this.x+this.diameter/2 >= 600 || 
		this.x-this.diameter/2 <= 100){    
			this.xSpeed *= -1;   
		}
		if (this.y+this.diameter/2 >=480 || this.y <= 50) {    
			this.ySpeed *= -1;
		}
  }
  overlaps(other) {
		let d = dist(other.x, other.y, this.x, this.y);
		return (d < this.diameter/2 + other.diameter/2);
	}

  newgame() {
    if( mouseIsPressed && mouseX > 600 && mouseY < 50){
      setup();
    }
  }
}

class Goalie {
	constructor(x, y){
		this.x = random (251, 349);
		this.y = 50;
		this.diameter = 50;
		this.xSpeed = .5;  
		this.ySpeed = 0; 
	}
	
  display() {
	  ellipse(this.x, this.y, this.diameter, this.diameter); 
	}
	
	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;	
  	}
	
	bounce() {
    if (this.x+this.diameter/2 >= 500 || 
		this.x-this.diameter/2 <= 200){    
			this.xSpeed *= -1;  
		}
	}
	  overlaps(other) {
		let d = dist(other.x, other.y, this.x, this.y);
		return (d < this.diameter/2 + other.diameter/2);
	  }
}