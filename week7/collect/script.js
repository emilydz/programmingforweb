var myVue = new Vue({
  el: "#app",
  data: {
    plants: [
      {
        name: "Pothos",
        sciname:"Epipremnum aureum",
        light: "moderate light",
        life: "five to ten years",
        image: "imgs/pothos.jpg",
      },
      {
        name: "Spider plant",
        sciname:"Chlorophytum comosum",
        light: "bright light",
        life: "indefinite lifespan",
        image: "imgs/spider.jpg",
      },
      {
        name: "Snake plant",
        sciname:"Dracaena trifasciata",
        light: "bright light, but avoid direct sunlight",
        life: "five to ten years",
        image: "imgs/snake.jpg",
      },
      {
        name: "Musk bush",
        sciname:"Tetradenia riparia",
        light: "full sun",
        life: "indefinite lifespan",
        image: "imgs/musk.jpg",
      },
    ]
  }
});
