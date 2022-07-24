import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';


const Pokedex = () => {
    const user = useSelector(state => state.user)

    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState('')
    const [type, setType] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setType(res.data.results))
    }, [])
    console.log(pokemons)
    // console.log(type)

    const search = (e) => {
        e.preventDefault();
        alert(pokemonSearch)
        navigate(`/pokedex/${pokemonSearch}`);
    }

    const filtertype = (e) => {
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }

    return (
        <div>
            <h1>pokedex</h1>
            <p>Bienvenido {user} a la pokedex</p>
            <form onSubmit={search}>
                <input
                    type="text"
                    value={pokemonSearch}
                    onChange={e => setPokemonSearch(e.target.value)}
                />
                <button>Search</button>
            </form>
            <select onChange={filtertype}>
                <option value="">selecciona una opcion</option>
                {
                    type.map(pokemonType => (
                        <option
                         value={pokemonType.url}
                         key={pokemonType.url}
                        >
                            {pokemonType.name}
                        </option>
                    ))
                }
            </select>
            <div>
                {
                    pokemons.map(pokemon => (
                        <PokemonItem pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.name ? pokemon.name : pokemon.pokemon.name} />
                    ))
                }
            </div>
        </div>
    );
};

export default Pokedex;