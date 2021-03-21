// my vue component
Vue.component('my-com', {
  template: `<div v-bind:class="{list__data: (index + 1) % 2 === 0, odd: (index + 1) % 2 !==0}">
        <div class="list__data-item">
          {{name}}</div>
        <div class="list__data-item">
          {{sciname}}</div>
        <div class="list__data-item">
          {{light}}</div>
        <div class="list__data-item">
          {{life}}</div>
        <div class="list__data-item">
          <img v-bind:src="image" class="list__data-image"></div>
      </div>`,
  props: ['name', 'sciname', 'light', 'life', 'image']
});

// my app
var myVue = new Vue({
  el: "#app",
  data: {
    // create a new object
    newPlantObj: {
      name: "",
      sciname:"",
      light: "",
      life: "",
      image: "",
    },
    // my plant data
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
  // methods
  methods: {
    // submit a new plant object
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
    // delete a plant object
    // deleteItem: item => {
    //  myVue.plants = myVue.plants.filter(plant => {
    //    return plant !== item;
    //  })
    //}
  }
});
