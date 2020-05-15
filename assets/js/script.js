//modification de l'affichage des produits en fonction de la selection
let sportives = [
  [],
  []
];

let urbaines = [
  []
];

let hybrides = [
  []
];

let enfants = [
  []
];

let samsung = [
  []
];

let Fossil = [
  []
];

let fitbit = [
  []
];

let apple = [
  []
];

let categories = [sportives, urbaines, hybrides, enfants, samsung, Fossil, fitbit, apple];

let allLinks = document.querySelectorAll('a');

allLinks.forEach(addEventListener('click' ,function() {
  this.console.log(this.event.target.id)
}))