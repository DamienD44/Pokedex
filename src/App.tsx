import "./App.css";
import { useState } from "react"
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";




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
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  }
];


/*function App() {
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
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleNext}>Suivant</button>

    </div>
  );
}
<NavBar/>
<PokemonCard pokemon={pokemonList[pokemonIdex]}/>*/

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(pokemonList[0]);


  return (
    <div>
      <nav>

        {pokemonList.map((items, i) => (

          <button type="button"
            key={items.name}
            onClick={() => setPokemonIndex(pokemonList[i])}
          >   {items.name}
          </button>
        ))}
      </nav>
      <NavBar />
      <PokemonCard pokemon={pokemonIndex} />





    </div>



  );
}

export default App



