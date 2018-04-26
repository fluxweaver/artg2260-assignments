let song, fft, button; // toggleBtn, fft;
let can;

function preload(){
  song = loadSound("assets/Glowing in the Dark.wav");
}

function setup() {
  button = createButton("Play and Pause Song");
  button.position(windowWidth/2, windowHeight/25)
  button.mousePressed(toggleAudio);
  can = createCanvas(windowWidth-20, windowHeight-20);
  can.style('display', 'block')
  can.parent("sketch-holder");
  // noFill();
  noStroke();

  song.loop();
  fft = new p5.FFT();
}

function draw() {
   background(1, random(180,220), 200);
   let spectrum = fft.analyze();
   var w = width/(spectrum.length-350)
   for(var i = 0; i < spectrum.length; i++) {
   	  fill(1%255, random(200)-1, random(200), 20)
   	ellipse(w*i, map(spectrum[i], 0, 255, height, 0), 75*w, 75*w);
   }
   for(var i = 0; i < spectrum.length; i++) {
   	  fill(1%255, random(200)-1, random(200))
   	ellipse(w*i, map(spectrum[i], 0, 255, height, 0), 10*w, 10*w);
   }
}

function toggleAudio() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}