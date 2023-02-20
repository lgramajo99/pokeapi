import axios from 'axios';
import React, { useState } from 'react';
import style from '../searchBar/SearchBar.module.css'


function SearchBar({ setPokemonList }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/pokemons/name?=${inputValue}`);
            setPokemonList([response.data]);
            console.log('Búsqueda exitosa:', response.data);
        } catch (error) {
            console.error('Error en la búsqueda:', error);
            setPokemonList([]);
        }
    };


    return (
        <form onSubmit={handleSubmit} className={style.formSearch}>
            <input onChange={handleInputChange}
                value={inputValue}
                className={style.inputSearch}
                type="text"
                placeholder="Buscar"
                autoComplete="off" />
            <button className={style.botonSearch}
                type="submit">
                Buscar
            </button>
        </form>
    )
}

export default SearchBar;