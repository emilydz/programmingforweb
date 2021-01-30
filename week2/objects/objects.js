const games = window.prompt("Pick a number between 1 and 3 to learn about a game");

const myGames = [
  { game: "Chess", players: 2, time: "a very long time", format: "a board with alternating black and white checkers and a set of pieces" },
  { game: "Tic, tac, toe", players: 2, time: "a very short time", format: "a board with 9 squares that are filled in by either X's or O's" },
  { game: "Spoons", players: "4 to 6", time: "a fairly short time", format: "a deck of cards and spoons" }
];

console.log(
  "You picked " + myGames[games - 1].game + ", you need " + myGames[games - 1].players + " people to play this game. It usually takes " + myGames[games - 1].time + " to play this game. It is played using " + myGames[games - 1].format + "."
);
