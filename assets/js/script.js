//modification de l'affichage des produits en fonction de la selection
//tab des categories 
let all = [
	["Samsung Galaxy Active One", "200 €", "SGAO-001", "descriptif"],

	["Samsung Galaxy Active Two", "200 €", "SGAT-001", "descriptif"],

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

	["Samsung Galaxy Active Two", "200 €", "SGAT-001", "descriptif"],

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

	x.forEach(element => {
		let card = document.createElement('div');
		card.className = 'card';

		let img = document.createElement('img');
		img.className = 'card-img-top'
		img.src = 'assets/img/' + element[2] + '.svg';

		let cardBody = document.createElement('div');
		cardBody.className = 'card-body';

		let title = document.createElement('h5');
		title.innerText = element[0];
		title.className = 'card-title';

		let text = document.createElement('p');
		text.className = 'card-text';
		text.innerHTML = element[3] + "</br>" + "ref : " + element[2];

		let add = document.createElement('a');
		add.href = "#";
		add.className = "btn btn-primary";
		add.innerText = "ajouter au panier : " + element[1];

		cardBody.appendChild(title);
		cardBody.appendChild(text);
		card.appendChild(cardBody);
		card.appendChild(img);
		card.appendChild(add);
		document.getElementById('containerProduct').appendChild(card);
	})
}