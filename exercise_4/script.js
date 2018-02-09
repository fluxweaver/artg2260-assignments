let b; 				

function setup() {
    createCanvas(100, 400);
  	b = new Box(); 	
}

function draw() {
  	background(0);
  	b.display();		
  	b.move();			
	  b.bounce();	
	  b.teleport();
}

class Box {
	constructor(){
		this.x = 33;
		this.y = 50;
		this.diameter = 30;
		this.xSpeed = random(-5, 5);  
		this.ySpeed = random(-5, 5); 
		this.r = 255;
		this.g = 0;
		this.b = 0;
	  
	}

	display() {
	  fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.diameter, this.diameter); 
	}

	// create a move() method
	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;	
  	}
  	
  teleport() {
    if (this.y <= 0) {
		  this.y = 370; 
		  this.r = random(255);
	  	this.g = random(255);
		  this.b = random(255);
		  }
}

	// create a telebounce() method
	bounce(){
		if (this.x+this.diameter/2 >= width - 15|| this.x-this.diameter/2 <= -15){    
			this.xSpeed *= -1;                                 
		}
		if (this.y+this.diameter/2 >= height - 15) {    
			this.ySpeed *= -1;
		} 
	}
}