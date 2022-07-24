import React, { useEffect, useState } from 'react';
import axios from  'axios';
import { useNavigate } from 'react-router-dom';

const PokemonItem = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
    }, [])
    // console.log(pokemon)
    return (
        <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <h3>{pokemon.name}</h3>
            <div><img src={pokemon.sprites?.other.dream_world.front_default} alt="" /></div>
        </div>
    );
};

export default PokemonItem;