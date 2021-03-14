var myVue = new Vue({
  el: "#app",
  data: {
    newPlantObj: {
      name: "",
      sciname:"",
      light: "",
      life: "",
      image: "",
    },
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
  },
  methods: {
    submitHandler: () => {
      console.log("submitted");
      myVue.plants = myVue.plants.concat(myVue.newPlantObj);
      myVue.resetForm();
    },
    resetForm: () => {
      myVue.newPlantObj = {
        name: "",
        sciname:"",
        light: "",
        life: "",
        image: "",
      }
    },
    deleteItem: item => {
      myVue.plants = myVue.plants.filter(plant => {
        return plant !== item;
      })
    }
  }
});
