var xPos;                        
var yPos;
var xBor = 30;                    
var yBor = 30;
var xSpeed = 1;                  
var ySpeed = 1;                  

function setup(){                
  createCanvas(800,400);      
  background(0);               
  xPos = width/2;               
  yPos = height/2;     
  xSpeed = 3;       
  ySpeed = 10;       
}

function draw(){              
  var r = random(10, 50)
  ( xPos <= 200){
    fill(50, 100, random(100, 220));
    } else if( xPos <= 400){
      fill(50, random(100, 220), 100);
      } else if( xPos <= 600){
      fill(255, random(150, 200), random(50, 100));
      } else fill(random(150, 220), random(150, 220), random(150, 220));
  rect(xPos + random(-20, 20), yPos + random(-20, 20), 3, r);
  xPos += xSpeed; 
  yPos += ySpeed;
  
  if (xPos+xBor/2 >= width || xPos-xBor/2 <= 0){    
    xSpeed *= -1;                                 
  }
  if (yPos+yBor/2 >= height || yPos-yBor/2 <= 0){    
    ySpeed *= -1;
  }
  if( mouseIsPressed) {
    fill(0,0,0);
    ellipse(mouseX, mouseY, 125, 125);
  }
   for (var i = 0; i < 25; i = i+1) {
   if( frameCount >= 1000) {
    fill(0,0,0);
    rect(random(5, 795), random(5, 395), 4, i);
    }
  }
}