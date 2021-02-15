let cardWidth = 150;
let cardHeight = 200;
let startingX = 100;
let startingY = 200;
let myCard = [];
let startingId = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 5; i++) {
      rect(startingX, startingY, cardWidth, cardHeight);
      myCard.push({ x: startingX, y: startingY, id: startingId });
      startingX += 200;
  }
  startingY += 250;
  startingX = 100;
}
  console.log(myCard);
}

//function mousePressed() {
  //for(let j = 0; j < myCard.length; j++){
    //let distance = dist(mouseX, mouseY, myCard[j].x, myCard[j].y);
    //if (distance < cardHeight / 2) {
      //console.log('Card has been clicked!', myCard[j].id);
    //}
  //}
//}
