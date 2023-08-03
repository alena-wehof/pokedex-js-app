let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
        { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
        { name: 'Venusaur', height: 2, types: ['grass', 'poison']},
    ];

    //add a pokemon object to the pokemonList
    function add(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        }
    }

    //access the full list of pokemon
    function getAll() {
        return pokemonList;
    }

    //create a button with the pokemon's name on it
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let pokemonButton = document.createElement('button');
        pokemonButton.innerText = pokemon.name;
        pokemonButton.classList.add('pokemon');
        listPokemon.appendChild(pokemonButton);
        pokemonList.appendChild(listPokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

//create a list of pokemon buttons on the page
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});