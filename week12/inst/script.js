let polySynth;
let button;
let x;

function setup() {
  createCanvas(600, 300);
  background('lightblue');
  text('Enter a number or a note—for example, 32, G4 or B1—and press play to hear the sound', 65, 100);

  polySynth = new p5.PolySynth();

  let inp = createInput();
  inp.position(250, 150);
  inp.size(100, 50);
  inp.input(create);

  button = createButton('PLAY');
  button.position(250, 220);
  button.style("font-family", "sans-serif");
  button.style("font-size", "35px");
  button.mouseClicked(playSynth);
}

function create() {
  x = this.value();
  console.log(x);
}

function playSynth() {
  // note duration (in seconds)
  let dur = 1.5;
  // time from now (in seconds)
  let time = 0;
  // velocity (volume, from 0 to 1)
  let vel = 0.5;
  polySynth.play(x, vel, 0, dur);
}

function touchStarted() {
	getAudioContext().resume();
}
