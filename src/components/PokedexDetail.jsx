import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetail = () => {

    const [pokemon, setPokemon] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    },[])
    console.log(pokemon)
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <div><img src={pokemon.sprites?.other.dream_world.front_default} alt="" /></div>
        </div>
    );
};

export default PokedexDetail;