let p = [];      
let b = [];
let numBalls = 12;
let numPlants = 8
let height = 400
let width = 800

function setup(){                
  createCanvas(width, height);      
  background(0);    
  for (let i = 0; i < numPlants; i++){  
      p[i] = new Plant(random(25, 375), random(25, 775));
    };
  for (let i = 0; i < numBalls; i++){  
      b[i] = new Ball(random(25, 375), random(25, 775));
    };
  noStroke();
}

function draw(){
  background(0, 0, 0, 5)
  for (let i = 0; i < b.length; i++){
  b[i].display();
  b[i].move();
  b[i].bounce();
  }
  for (let i = 0; i < p.length; i++){
  p[i].display();
  p[i].move();
  p[i].bounce();
  }
}

class Plant {
  constructor() {
    this.x = 400
    this.y = 200
    this.height = random(10, 50)
    this.width = 3
    this.xSpeed = random(-4, 4)
    this.ySpeed = random(-10, 10)
    }
    
  display() {
    push();
    fill(random(0,255), random(0, 255), random(0, 255), .5);
    translate(400, 200);
    rect(-400, -200, 800, 400);
    pop();
    if( this.x <= 200){
    fill(50, 100, random(100, 220));
    } else if( this.x <= 400){
      fill(50, random(100, 220), 100);
      } else if( this.x <= 600){
      fill(255, random(150, 200), random(50, 100));
      } else fill(random(150, 220), random(150, 220), random(150, 220));
    rect(this.x + random (-20, 20), this.y - random(-20, 20), this.width, this.height)
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;  
    }
  
  bounce() {
    if (this.x+this.width >= width|| 
    this.x <= 0){    
      this.xSpeed *= -1;   
    }
    if (this.y+this.height >= height || this.y <= 0) {    
      this.ySpeed *= -1;
    }
  }
}

class Ball {
  constructor() {
    this.x = random(25, 775)
    this.y = random(25, 375)
    this.diameter
    this.xSpeed = random(-10, 10)
    this.ySpeed = random(-10, 10)
    }
    
  display() {
    fill(0)
    ellipse(this.x, this.y, 50, 50)
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;  
    }
  
  bounce() {
    if (this.x>= width|| 
    this.x <= 0){    
      this.xSpeed *= -1;   
    }
    if (this.y>= height || this.y <= 0) {    
      this.ySpeed *= -1;
    }
  }
}
