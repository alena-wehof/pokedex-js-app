let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
        { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
        { name: 'Venusaur', height: 2, types: ['grass', 'poison']},
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

//list pokemon on page with their heights in parentheses
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write('<p></p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
    //check the height to add extra note
    if (pokemon.height > 1.5) {
        document.write(' - Wow, that\'s big!');
    }
})