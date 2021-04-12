var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 5;
var a = 1;
var b = 1;
var osc1 = 0;

function setup() {
  createCanvas(600, 600);
}

// supershape equation
function supershape(theta) {
  var part1 = (1 / a) * cos(theta * m / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  var part2 = (1 / b) * sin(theta * m / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  var part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
      return 0;
  }

  return (1 / part3);
}

function draw() {
  // create an oscillation with the m variable
  m = map(sin(osc1), -1, 1, 0, 100);
  osc1 += 0.001;

  background(255);
  translate(width / 2, height / 2);

  stroke('blue');
  noFill();

  // set radius
  var radius = 200;

  // set increments for loop
  var total = 500;
  var increment = TWO_PI / total;

  // begin drawing supershape
  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += increment) {
    var r = supershape(angle);
    var x = radius * r * cos(angle);
    var y = radius * r * sin(angle);

    vertex(x, y);
  }
  // end supershape
  endShape(CLOSE);

  // begin drawing supershape
  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += increment) {
    var r = supershape(angle);
    var x = radius / 2 * r * cos(angle);
    var y = radius / 2 * r * sin(angle);

    vertex(x, y);
  }
  // end supershape
  endShape(CLOSE);

  // begin drawing supershape
  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += increment) {
    var r = supershape(angle);
    var x = radius / 4 * r * cos(angle);
    var y = radius / 4 * r * sin(angle);

    vertex(x, y);
  }
  // end supershape
  endShape(CLOSE);
}
