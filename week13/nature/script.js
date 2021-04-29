let cols;
let rows;
// to hold the state of the water
let previous; // buffer 1
let current; // buffer 2

// creates the damping
let dampening = .95;

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  cols = width;
  rows = height;

  // a 2D cols-by-rows array with zeroes in every array cell
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}

function mouseMoved() {
  previous[mouseX][mouseY] = 9000;
}

function draw() {
  background(255);

  loadPixels();
  // loop through every non-edge element
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      // creates a sum of the values that surround it, subtracting it's current position
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1])
          / 2 - current[i][j];

      // add dampening
      current[i][j] = current[i][j] * dampening;

      // pixels stored in 1D array, loop through 2D array
      let index = (i + j * cols) * 4;
      pixels[index + 10] = current[i][j];
      pixels[index + 11] = current[i][j];
      pixels[index + 12] = current[i][j];
    }
  }

  updatePixels();

  // swamp the buffers
  let temp = previous;
  previous = current;
  current = temp;
}
