let pokemonList = [
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

//For loop to iterate over objects in pokemonList array:
for (let i = 0; i < pokemonList.length; i++) {
//Conditional to display message for tall pokemon:
	if (pokemonList[i].height >= 2) {
		document.write (pokemonList[i].name + " " + " (height: " + pokemonList[i].height + ")" + " Wow - that's a big Pokemon!" + "<br />");
	}else {
		document.write (pokemonList[i].name + " " + " (height: " + pokemonList[i].height + ")" + "<br />");
	}
}
