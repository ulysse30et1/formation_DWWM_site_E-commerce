//modification de l'affichage des produits en fonction de la selection

// creaation des tableau pour les categories
let sportives = [];

let urbaines = [];

let hybrides = [];

let enfants = [];

let samsung = [
  ["Samsung Galaxy Active One", "200 €", "SGAO-001", "descriptif"],

  ["Samsung Galaxy Active Two", "200 €", "SGAO-002", "descriptif"],

  ["Samsung Galaxy Fit", "200 €", "SGF-001", "descriptif"],

  ["Samsung Galaxy Watch", "200 €", "SGW-001", "descriptif"]
];

let Fossil = [
  ["Fossil Carlyle", "200 €", "FCAR-001", "descriptif"],
  ["Fossil Carlyle", "200 €", "FCAR-002", "descriptif"],

  ["Fossil Charter", "200 €", "FCHA-001", "descriptif"],
  ["Fossil Charter", "200 €", "FCHA-002", "descriptif"],

  ["Fossil Collider", "200 €", "FCOL-001", "descriptif"],

  ["Fossil Julianna", "200 €", "FJUL-001", "descriptif"],
  ["Fossil Julianna", "200 €", "FJUL-002", "descriptif"],

  ["Fossil Sport ", "200 €", "FSPO-001", "descriptif"]
];

let fitbit = [
  ["Fitbit Versa One", "200 €", "FVO-001", "descriptif"],
  ["Fitbit Versa Two", "200 €", "FVT-001", "descriptif"]
];

let apple = [
  ["Apple Watch Serie 3", "200 €", "AWS3-001", "descriptif"],
  ["Apple Watch Serie 5", "200 €", "AWS5-001", "descriptif"]
];

// selection des liens 
let allLinks = document.querySelectorAll('a');

allLinks.forEach(addEventListener('click', function () {

  this.console.log(this.event.target.id)

  if (this.event.target.id === "sportives") {
    console.log('test1')
  } else if (this.event.target.id === "urbaines") {
    console.log('test2')

  } else if (this.event.target.id === "hybrides") {
    console.log('test3')

  } else if (this.event.target.id === "enfants") {
    console.log('test4')

  }else if (this.event.target.id === "samsung") {
    console.log('test5')

  }else if (this.event.target.id === "Fossil") {
    console.log('test6')

  }else if (this.event.target.id === "fitbit") {
    console.log('test7')

  }else if (this.event.target.id === "apple") {
    console.log('test8')

  } else {
    //afficher tuute les cards
    console.log('test9')
  }

}))

function newCard () {
  let div = document.createElement('div');
  div.innerHTML = (`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`)
  document.getElementById('containerProduct').insertAdjacentElement('afterbegin' ,div)
}