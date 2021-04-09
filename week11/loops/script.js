let x, y, sq;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background ('#535c44');

}

function draw() {
    strokeWeight(0.25);
    noFill();
    stroke(255);

    for (let x = 100; x <= 600; x += 40) {
        for (let y = 100; y <= 600; y += 40) {
          square(x, y, 40);


    if (
        mouseX >= x &&
        mouseX <= x + 25 &&
        mouseY >= y &&
        mouseY <= y + 25
      ) {
        x += random(-10, 10);
        y += random(-10, 10);
      }
        }
    }
}
