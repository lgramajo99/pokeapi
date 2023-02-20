import Card from "../card/Card";
import { useState, useEffect } from 'react';
import axios from 'axios';

function CardsList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('/pokemons')
            .then(response => {
                setPokemons(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(pokemons);

    return (
        <div>
            {pokemons.map((pokemon, index) => (
                <Card key={index} name={pokemon.name} url={pokemon.url} />
            ))}
        </div>
    );
}

export default CardsList;