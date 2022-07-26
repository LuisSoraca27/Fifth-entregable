import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rectangle147 from '../img/Rectangle 147.png'
import rectangle148 from '../img/Rectangle 148.png'
import image12 from '../img/image 12.png'

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
             <footer className='portada'>
                <div className='color-red'>
                    <img src={rectangle147} alt="" />
                </div>
                <div className='color-black'>
                    <img src={rectangle148} alt="" />
                </div>
                <div className='pokedex-img'>
                    <img src={image12} alt="" />
                </div>
                <div>
                </div>
            </footer>
            <div className='container-info-pokemon'>
                <div  className={`portada-pokemon ${pokemon.types?.[0].type.name}`}>
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
                </div>
                <div className='container-id'>
                    <div className='id-pokemon'>
                        <h2>#{pokemon.id}</h2>
                    </div>
                </div>
                <div className='name-pokemon'>
                    <h5>________________________________<span>{pokemon.name}</span>________________________________ </h5> 
                </div>
                <div className='pokemon-stats'>
                    <div className='stats'>
                        <p>Weight</p>
                        <h3>{pokemon.weight}</h3>
                    </div>
                    <div className='stats'>
                        <p>Height</p>
                        <h3>{pokemon.height}</h3>
                    </div>
                </div>

                <div className='pokemon-stats-type'>
                    <h3>Type</h3>
                    <div className='type1'>
                        <h4>{pokemon.types?.[0].type.name}</h4>
                        </div>
                        <div className='type2'>
    
                        </div>
                </div>
                <div className='pokemon-stats-skills'>
                    <h3>Skills</h3>
                    <div className='skills1'>

                    </div>
                    <div className='skills2'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokedexDetail;