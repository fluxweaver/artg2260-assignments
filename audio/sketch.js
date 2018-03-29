let song, slider;

function preload(){
  song = loadSound("assets/simplicity.mp3");
}

function setup() {
  song.play();
  slider1 = createSlider(0, 1, 0.5, 0.01);
  slider2 = createSlider(0, 2, 0.5, 0.01);
  slider3 = createSlider(0, 3, 0.5, 0.01);
}

function draw(){
  song.setVolume(slider1.value());
  song.pan(slider2.value());
  song.rate(slider3.value());
}
