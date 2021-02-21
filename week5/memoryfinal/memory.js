const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
  totalPairs: 5,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
let cardBack;
let cardfaceArray = [];

function setup() {
  createCanvas(1200, 800);
  let selectedFaces = [];
  for (let z = 0; z < 5; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesn't get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 2; j++){
    for (let i = 0; i < 5; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 200;
    }
    startingY += 275;
    startingX = 100;
  }
}

function draw () {
  background(255);
  if (gameState.numMatched === gameState.totalPairs) {
    fill('darkblue');
    textSize(90);
    textFont('Quicksand, sans-serif');
    text('You won!', 700, 750);
    noLoop();
  }
  for (let p = 0; p < cards.length; p++) {
    if(!cards[p].isMatch) {
      cards[p].face = DOWN;
    }
    cards[p].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill(0);
  textSize(36);
  textFont('Quicksand, sans-serif');
  text('Attempts: ' + gameState.attempts, 100, 700);
  text('Matches: ' + gameState.numMatched, 100, 750);
  text('Plant Memory Game', 100, 70);
  textSize(14);
  text('Use your memory to match the cards. Good luck!', 770, 70);

}

// preload the images
function preload() {
  cardBack = loadImage('imgs/cardback.png');
  cardfaceArray = [
    loadImage('imgs/smallplant1.png'),
    loadImage('imgs/smallplant2.png'),
    loadImage('imgs/smallplant3.png'),
    loadImage('imgs/smallplant4.png'),
    loadImage('imgs/smallplant5.png')
  ]
}

// set up the click function
function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
        console.log('flipped', cards[k]);
        gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg ===    gameState.flippedCards[1].cardFaceImg) {
      //cards match
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1500)
    }
  }
}

// set up card class
class Card {
  constructor (x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 175;
    this.height = 260;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show () {
    if(this.face === UP || this.isMatch) {
      fill(255);
      strokeWeight(1);
      rect(this.x, this.y, this.width, this.height);
      //.cardFaceImg.resize(200, 200);
      image(this.cardFaceImg, this.x - 6, this.y + 25);
    } else {
      fill(255);

      strokeWeight(1);
      rect(this.x, this.y, this.width, this.height);
      //cardBack.resize(345, 375);
      image(cardBack, this.x + 4, this.y + 4);
    }
  }

  didHit (mouseX, mouseY) {
    if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height)) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

// randomize the array of images
function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    // Pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}
