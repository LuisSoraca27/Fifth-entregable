import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/background.css'

const PokemonItem = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])
    console.log(pokemon)
    return (
        <div
            onClick={() => navigate(`/pokedex/${pokemon.id}`)}
            className={`card-pokemon ${pokemon.types?.[0].type.name}`}
        >
            <div className={`img-pokemon ${pokemon.types?.[0].type.name}`}>
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            </div>
            <div className='info-pokemon'>
                <h2 className={`${pokemon.types?.[0].type.name}`+'color'}
                >{pokemon.name}</h2>
                <span>{pokemon.types?.[0].type.name}</span>
                <div className='statistics-pokemon'>
                <div className="statistics-info">
                 <span>HP</span><p>{pokemon.stats?.[0].base_stat}</p>
                </div>
                <div className="statistics-info">
                  <span>ATTACK</span><p>{pokemon.stats?.[1].base_stat}</p>
                </div>
                <div className="statistics-info">
                    <span>DEFENSES</span><p>{pokemon.stats?.[2].base_stat}</p>
                </div>
                <div className="statistics-info">
                    <span>SPEED</span><p>{pokemon.stats?.[5].base_stat}</p>
                </div>
            </div>  
            </div>
          
        </div>
    );
};

export default PokemonItem;