let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectY = random(height - rectHeight);
  speed = random(1, 3);
}

function draw() {
  background(100);
  drawShape();
  rectX += speed;
  if(rectX > width) {
    noLoop();
    if(clickCount > 5) {
      fill(255);
      textSize(40);
      textFont('Helvetica');
      text('Great job! Your score was ' + clickCount, 100, 400);
    } else {
      fill(255);
      textSize(40);
      textFont('Helvetica');
      text('Do better! Your score was ' + clickCount, 100, 400);
    }
  }
}

function mousePressed() {
  if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('green');
  rect(rectX, rectY, rectWidth, rectHeight);
}
