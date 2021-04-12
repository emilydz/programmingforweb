let mic;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
	mic.start();

  background(255);

}

function draw() {
  translate(300, 300);

  var micLevel = mic.getLevel();
  micLevel = mic.getLevel();
  let y = micLevel;

  console.log(micLevel);
  let sc = second();

  strokeWeight(1);
  let fadeSound = map(y, 0, 0.07, 0, 255)
  let secondAngle = map(sc, 0, 60, 0, 360);
  rotate(secondAngle);
  stroke(255, 0, 0, fadeSound);
  line(0, 200, 200, 0);
}

function touchStarted() {
	getAudioContext().resume();
}
