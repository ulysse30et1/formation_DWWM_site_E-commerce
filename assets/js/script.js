//modification de l'affichage des produits en fonction de la selection
//tab des categories 
let all = [
	["Samsung Galaxy Active One", "200 €", "SGAO-001", "descriptif"],

	["Samsung Galaxy Active Two", "200 €", "SGAO-002", "descriptif"],

	["Samsung Galaxy Fit", "200 €", "SGF-001", "descriptif"],

	["Samsung Galaxy Watch", "200 €", "SGW-001", "descriptif"],

	["Apple Watch Serie 3", "200 €", "AWS3-001", "descriptif"],
	["Apple Watch Serie 5", "200 €", "AWS5-001", "descriptif"],

	["Fossil Carlyle", "200 €", "FCAR-001", "descriptif"],
	["Fossil Carlyle", "200 €", "FCAR-002", "descriptif"],

	["Fossil Charter", "200 €", "FCHA-001", "descriptif"],
	["Fossil Charter", "200 €", "FCHA-002", "descriptif"],

	["Fossil Collider", "200 €", "FCOL-001", "descriptif"],

	["Fossil Julianna", "200 €", "FJUL-001", "descriptif"],
	["Fossil Julianna", "200 €", "FJUL-002", "descriptif"],

	["Fossil Sport ", "200 €", "FSPO-001", "descriptif"],

	["Fitbit Versa One", "200 €", "FVO-001", "descriptif"],
	["Fitbit Versa Two", "200 €", "FVT-001", "descriptif"],

	["Huawei GT Elegant", "200 €", "HGTE-001", "descriptif"],

	["Huawei Watch GT One", "200 €", "HWGTO-001", "descriptif"],
	["Huawei Watch GT Two", "200 €", "HWGTT-001", "descriptif"],

	["Huawei Watch Sport", "200 €", "HWSPT-001", "descriptif"],

	["Kiwip", "200€", "KIW-001", "descriptif"]
];

let sportives = [
	["Fitbit Versa One", "200 €", "FVO-001", "descriptif"],

	["Fossil Sport ", "200 €", "FSPO-001", "descriptif"],

	["Samsung Galaxy Fit", "200 €", "SGF-001", "descriptif"]
];

let urbaines = [
	["Fossil Carlyle", "200 €", "FCAR-001", "descriptif"],
	["Fossil Carlyle", "200 €", "FCAR-002", "descriptif"],

	["Fossil Julianna", "200 €", "FJUL-001", "descriptif"],
	["Fossil Julianna", "200 €", "FJUL-002", "descriptif"],

	["Apple Watch Serie 3", "200 €", "AWS3-001", "descriptif"],
	["Apple Watch Serie 5", "200 €", "AWS5-001", "descriptif"],

	["Fitbit Versa Two", "200 €", "FVT-001", "descriptif"],

	["Huawei Watch GT One", "200 €", "HWGTO-001", "descriptif"],
	["Huawei Watch GT Two", "200 €", "HWGTT-001", "descriptif"]
];

let hybrides = [
	["Fossil Charter", "200 €", "FCHA-001", "descriptif"],
	["Fossil Charter", "200 €", "FCHA-002", "descriptif"],

	["Fossil Collider", "200 €", "FCOL-001", "descriptif"]
];

let enfants = [
	["Kiwip", "200€", "KIW-001", "descriptif"]
];

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

let huawei = [
	["huawei GT Elegant", "200 €", "HGTE-001", "descriptif"],

	["huawei Watch GT One", "200 €", "HWGTO-001", "descriptif"],
	["huawei Watch GT Two", "200 €", "HWGTT-001", "descriptif"],

	["huawei Watch Sport", "200 €", "HWSPT-001", "descriptif"]
]

let kiwip = [
	["Kiwip", "200€", "KIW-001", "descriptif"]
]

//recuperation de l'ID de l'element au clique 

let allLinks = document.querySelectorAll('a');

allLinks.forEach(addEventListener('click', function () {
	let categories = this.event.target.id;

	if (categories === "sportives") {
		createCards(sportives);

	} else if (categories === "urbaines") {
		createCards(urbaines);

	} else if (categories === "hybrides") {
		createCards(hybrides);

	} else if (categories === "urbaines") {
		createCards(urbaines);

	} else if (categories === "enfants") {
		createCards(enfants);

	} else if (categories === "samsung") {
		createCards(samsung);

	} else if (categories === "Fossil") {
		createCards(Fossil);

	} else if (categories === "fitbit") {
		createCards(fitbit);

	} else if (categories === "apple") {
		createCards(apple);

	} else if (categories === "huawei") {
		createCards(huawei);

	} else if (categories === "kiwip") {
		createCards(kiwip);

	} else {
		createCards(all);
	}
}))

function createCards(x) {
	//supprime tout contenus deja present 
	document.getElementById('containerProduct').innerHTML = " ";
	//creation d'une cards en fonction des ellements du tableau
	x.forEach(element => document.getElementById('containerProduct').insertAdjacentHTML("beforeend", "nom = " + element[0] + "prix = " + element[1] + "ref = " + element[2] + "description du produit " + element[3] + "</br>"));
}

function createCards(x) {
	//supprime tout contenus deja present 
	document.getElementById('containerProduct').innerHTML = " ";

	x.forEach(element => {
		let card = document.createElement('div');
		card.className = 'card';

		let cardBody = document.createElement('div');
		cardBody.className = 'card-body';

		let title = document.createElement('h5');
		title.innerText = element[0];
		title.className = 'card-title';

		let text = document.createElement ('p');
		text.className = 'card-text';
		text.innerText = element[3];

		cardBody.appendChild(title);
		cardBody.appendChild(text);
		card.appendChild(cardBody);
		document.getElementById('containerProduct').appendChild(card);	
	})
}