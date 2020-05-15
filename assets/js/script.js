//modification de l'affichage des produits en fonction de la selection
let sportives = [
];

let urbaines = [
];

let hybrides = [
];

let enfants = [
];

let samsung = [
];

let Fossil = [
  ["Fossil Carlyle", "200 €", "FCAR-001", "descriptif"],
  ["Fossil Carlyle", "200 €", "FCAR-002", "descriptif"],

  ["Fossil Charter", "200 €", "FCHA-001", "descriptif"],
  ["Fossil Charter", "200 €", "FCHA-002", "descriptif"],

  ["Fossil Collider", "200 €", "FCOL-001", "descriptif"],

  ["Fossil Julianna", "200 €", "FJUL-001", "descriptif"],
  ["Fossil Julianna", "200 €", "FJUL-002", "descriptif"],

  ["Fossil Sport ", "200 €", "FSPO-001", "descriptif"],

];

let fitbit = [
  ["Fitbit Versa One", "200 €", "FVO-001", "descriptif"],
  ["Fitbit Versa Two", "200 €", "FVT-001", "descriptif"]
];

let apple = [
  ["Apple Watch Serie 3", "200 €", "AWS3-001", "descriptif"],
  ["Apple Watch Serie 5", "200 €", "AWS5-001", "descriptif"]
];

let categories = [sportives, urbaines, hybrides, enfants, samsung, Fossil, fitbit, apple];

let allLinks = document.querySelectorAll('a');

allLinks.forEach(addEventListener('click', function () {
  this.console.log(this.event.target.id)
}))