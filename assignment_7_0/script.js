var data;

function preload(){

	data = loadJSON("https://fluxweaver.github.io/artg2260-assignments/assignment_7_0/assets/data.json");
}

function setup() {
  can = createCanvas(1500, 400);
  can.parent("sketch-holder");
  background(250);
  noStroke();
  var t = data.climate
  var w = width/data.climate.length
  var temp = t[t.length - 1];
  for(var i = 0; i < data.climate.length; i++) {
    var maximum = ((t[i].Mean+1)/(temp.Mean+1))*height
    fill(random(100, 150),random(100, 150),random(100, 150), i*3);
    rect(w*i, maximum - height/2, w, height);
  }
  	text("trend of anomalies in global temperature", 10, 195);
    fill(200, 200, 200);
   	rect(0, 200, 250, 2);
}

 