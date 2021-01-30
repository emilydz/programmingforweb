const yourMovie = window.prompt("What's your favorite movie?");

const myMovies = [
  "Nymphomaniac",
  "Upstream Color",
  "Requiem for a Dream",
  "Into the Wild",
  "Star Wars"
];

myMovies.push(yourMovie);
console.log(myMovies.toString());
