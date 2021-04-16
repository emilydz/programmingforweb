function preload() {
  soundFormats ('wav');
  mySound = loadSound('threechoruses.wav');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(soundOn);
  amplitude = new p5.Amplitude();
}

function draw() {
  background('lightblue');

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  fill(255);
  noStroke();
  for(x = 0; x <= 1000; x = x + 10) {
    rect(x, x, size, 10);
    rect(x, x + 100, size, 10);
    rect(x, x + 200, size, 10);
    rect(x, x + 300, size, 10);
    rect(x, x + 400, size, 10);
    rect(x, x - 100, size, 10);
    rect(x, x - 200, size, 10);
    rect(x, x - 300, size, 10);
    rect(x, x - 400, size, 10);
  }

  x += 1;
}

function soundOn() {
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}
