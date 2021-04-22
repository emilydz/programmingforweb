var mySound;
let osc, playing, freq, amp;

function preload() {
    mySound = loadSound('threechoruses.wav');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(playOscillator);
    osc = new p5.Oscillator('sine');
    mySound.setVolume(0.1)
    mySound.play();
}

function draw() {
    background(30, 35, 200);
    fill(255);
    freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
    amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

    text('tap to play', 20, 20);
    text('freq: ' + freq, 20, 40);
    text('amp: ' + amp, 20, 60);

    if (playing) {
      // smooth the transitions by 0.1 seconds
      osc.freq(freq, 0.1);
      osc.amp(amp, 0.1);
    }
}

function playOscillator() {
    osc.start();
    playing = true;
  }
