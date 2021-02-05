function setup() {
  createCanvas(200, 200);
}

function createTile() {
  translate(0,0);
  noStroke();
  fill('#F0F1E4');
  rect(0, 0, 200, 200);
  fill(0, 0, 255, 40);
  circle(100, 0, 80);
  fill(0, 0, 255, 80);
  circle(100, 40, 80);
  fill(0, 0, 255, 120);
  circle(100, 80, 80);
  fill(0, 0, 255, 160);
  circle(100, 120, 80);
  fill(0, 0, 255, 200);
  circle(100, 160, 80);
  fill(0, 0, 255, 240);
  circle(100, 200, 80);
}

function draw() {
  createTile();
}
