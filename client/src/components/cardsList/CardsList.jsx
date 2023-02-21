import Card from "../card/Card";
import style from "../cardsList/CardsList.module.css"
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
        <div className={style.divPadre}>
            {pokemons.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    nombre={pokemon.nombre}
                    imagen={pokemon.imagen}
                    tipos={pokemon.tipos}
                />
            ))}
        </div>
    );
}

export default CardsList;