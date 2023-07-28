let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    { name: 'Venusaur', height: 2, types: ['grass', 'poison']},
];

//list pokemon on page with their heights in parentheses
pokemonList.forEach(function (pokemonList) {
    document.write('<p></p>' + pokemonList.name + ' (height: ' + pokemonList.height + ')');
    //check the height to add extra note
    if (pokemonList.height > 1.5) {
        document.write(' - Wow, that\'s big!');
    }
})