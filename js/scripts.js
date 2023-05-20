let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    { name: 'Venusaur', height: 2, types: ['grass', 'poison']},
];

//list pokemon on page with their heights in parentheses
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p></p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
    //check the height to add extra note
    if (pokemonList[i].height > 1.5) {
        document.write(' - Wow, that\'s big!');
    }
}
