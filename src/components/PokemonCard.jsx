import React from 'react';

const pokemonList = [
    {
        name: "bulbizarre",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    }
];

function PokemonCard() {
    const pokemon = pokemonList[0]
    const image = pokemon.imgSrc ? <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}  alt={"pokemon"}/> : <p>???</p>

return(
    <figure>
        {image}
        <figcaption>{pokemonList[0].name}</figcaption>
    </figure>
    );
}

export default PokemonCard;
