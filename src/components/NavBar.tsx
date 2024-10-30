import { useState } from "react";
import PokemonCard from "./PokemonCard";

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "charmander",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
        name: "squirtle",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
        name: "pikachu", imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

    },
    {
        name: "mew",
        imgSrc:
            ""
    }
];
/* */


function NavBar() {
    const [pokemonIndex, setPokemonIndex] = useState(pokemonList[0]);


    return (
        <>
            <PokemonCard {...pokemonIndex} />
            {pokemonList.map((items, i) => (

                <button type="button"
                    key={i}


                    onClick={() => setPokemonIndex(pokemonList[i])}
                >
                    {items.name}
                </button>
            ))




            }
        </>


    )
}

export default NavBar