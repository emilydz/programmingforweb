function setup() {
  createCanvas(600,600);
}

function createTile(orginX, orginY, color) {
  translate(orginX, orginY);
  noStroke();
  fill('#F0F1E4');
  rect(0, 0, 200, 200);
  fill(0, 0, color, 240);
  circle(100, 0, 80);
  fill(0, 0, color, 80);
  circle(100, 40, 80);
  fill(0, 0, color, 120);
  circle(100, 80, 80);
  fill(0, 0, color, 160);
  circle(100, 120, 80);
  fill(0, 0, color, 200);
  circle(100, 160, 80);
  fill(0, 0, color, 240);
  circle(100, 200, 80);
}

function draw() {
  createTile(0, 0, 300);
  createTile(0, 200, 250);
  createTile(0, 200, 225);
  createTile(200, -400, 200);
  createTile(0, 200, 175);
  createTile(0, 200, 150);
  createTile(200, -400, 125);
  createTile(0, 200, 50);
  createTile(0, 200, 0);
}
