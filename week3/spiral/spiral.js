let rotateBy = 100;

function setup() {
  createCanvas(600, 600);
  background(250, 200, 100, 60);
  angleMode(DEGREES);
}

function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  noStroke();
  fill(mouseX, 100, mouseY, 20); //fill is influenced by mouse movement
  ellipse(200 / alt, 50 - alt, 150 / alt);
}

function draw() {
  translate(300, 300);
  rotate(rotateBy); //rotates canvas
  makeArm(rotateBy);
  rotateBy += 5;
}

function mousePressed() {
  noLoop();
}
