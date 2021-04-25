let di;
let angle = 0;
var start, inc;
var fade;

function setup() {
  createCanvas(800,800);
  di = height;
  strokeWeight(2);
  noFill();

  start = 0.0;
  inc = 0.03;
}

function draw() {
  background('lightblue');

  var mySin = sin(start);
  fade = map(mySin, -1, 1, 15, 50);

  //ripple 1
  stroke(0, 0, 255, fade);
  r1 = 1 + (sin(angle) * di/3 + di/3);
  ellipse(width/2, height/2, r1, r1);

  //ripple 2
  stroke(0, 0, 255, fade - 10);
  r2 = .8 + (sin(angle) * di/3.2 + di/3.2);
  ellipse(width/2, height/2, r2, r2);

  //ripple 3
  stroke(0, 0, 255, fade - 15);
  r3 = .6 + (sin(angle) * di/3.4 + di/3.4);
  ellipse(width/2, height/2, r3, r3);

  angle += .03;
  start = start + inc;
}
