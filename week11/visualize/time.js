function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(300, 300);
  rotate(90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  noStroke();
  fill(0, 0, 100, 255);
  let hourAngle = map(hr, 48, 0, 0, 360);
  let hourAngle2 = map(hr, 0, 48, 0, 360);
  arc(0, 0, 300, 300, hourAngle2, hourAngle, CHORD);

  fill(100, 0, 0, 127);
  let minuteAngle = map(mn, 120, 0, 0, 360);
  let minuteAngle2 = map(mn, 0, 120, 0, 360);
  arc(0, 0, 400, 400, minuteAngle2, minuteAngle, CHORD);

  fill(0, 100, 0, 92);
  let secondAngle = map(sc, 120, 0, 0, 360);
  let secondAngle2 = map(sc, 0, 120, 0, 360);
  arc(0, 0, 500, 500, secondAngle2, secondAngle, CHORD);
}
