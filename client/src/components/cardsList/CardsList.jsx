import Card from "../card/Card";
import { useState, useEffect } from 'react';
import axios from 'axios';

function CardsList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3001/pokemons');
            setPokemons(response.data)
        }
        fetchData()
    }, [])

    console.log(pokemons);

    return (
        <div>
            {pokemons.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    nombre={pokemon.nombre}
                    imagen={pokemon.imagen}
                    tipos={pokemon.tipos}
                />
            ))}
        </div>
    );
}

export default CardsList;