var pokemonRespository = (function () {
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
		}
	];

	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		if(typeof pokemon === 'object'){
		pokemonList.push(pokemon);
		}
	}

	return {
		getAll: getAll,
		add: add
	}
})();

//forEach() Loop:

pokemonRespository.getAll().forEach(function(pokemon) {
	document.write("<b>Name: </b>" + pokemon.name + " " + "<b>Type: </b>" + pokemon.types + " " + "<b>Height: </b>" + pokemon.height + " " + "<b>Weight: </b>" + pokemon.weight + "<br />");
});
