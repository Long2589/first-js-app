var pokemonRepository = (function () {
	var pokemonList = [
		{
		  name: 'Charizard',
		  types: ['fire', 'flying'],
		  height: 1.7,
		  weight: 90.5
		},
		{
		  name: 'Seadra',
		  types: ['water'],
		  height: 1.2,
		  weight: 25
		},
		{
		  name: 'Jumpluff',
		  types: ['grass', 'flying'],
		  height: 0.8,
		  weight: 3
		},
		{
		  name: 'Articuno',
		  types: ['ice', 'flying'],
		  height: 1.7,
		  weight: 55.4
		},
		{
		  name: 'Mewtwo',
		  types: ['psychic'],
		  height: 2,
		  weight: 122
		},
		{
		  name: 'Luxray',
		  types: ['electric'],
		  height: 1.4,
		  weight: 42
		},
	];

	function add(pokemon) {
		if (typeof pokemon === 'object') {
		pokemonList.push(pokemon);
	}
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let pokemonList = document.querySelector(".pokemon-list");
		let listItem = document.createElement("li");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.classList.add("button-class");
		listItem.appendChild(button);
		pokemonList.appendChild(listItem);
		button.addEventListener('click', function () {
			showDetails(pokemon);
		});
	}

	function showDetails(pokemon) {
		console.log(pokemon);
	}

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		showDetails: showDetails
	};
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});
