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



function NavBar() {


    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleNext = () => {
        setPokemonIndex((prevIndex) =>
            prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0
        );
    };
    const handlePrevious = () => {
        setPokemonIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1
        );
    };

    return (

        <div>
            <button onClick={handlePrevious}>Précédent</button>

            <button onClick={handleNext}>Suivant</button>

            <PokemonCard pokemon={pokemonList[pokemonIndex]} />

        </div>
    );
}




export default NavBar