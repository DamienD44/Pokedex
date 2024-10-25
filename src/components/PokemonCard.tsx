
interface Pokemon {
    name: string;
    imgSrc: string;
};
interface PokemonCardProps {
    pokemon: Pokemon;
}


function PokemonCard({ pokemon }: PokemonCardProps) {
    const { name, imgSrc } = pokemon;




    return (


        <figure>
            {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}

            <figcaption>{name}</figcaption>
        </figure>


    )
}

export default PokemonCard