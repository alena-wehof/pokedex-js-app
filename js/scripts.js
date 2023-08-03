let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
        { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
        { name: 'Venusaur', height: 2, types: ['grass', 'poison']},
    ];

    function add(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        }
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

//create a list of buttons so each pokemon's name is on its own button
pokemonRepository.getAll().forEach(function (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let pokemonButton = document.createElement('button');
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add('pokemon');
    listPokemon.appendChild(pokemonButton);
    pokemonList.appendChild(listPokemon);
})