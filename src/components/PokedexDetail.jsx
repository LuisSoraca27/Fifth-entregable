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
    }, [])
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
                <div className={`portada-pokemon ${pokemon.types?.[0].type.name}`}>
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

                <div className='container-stats'>
                    <div className='pokemon-stats-type'>
                        <h3>Type</h3>
                        <div className='type1'>
                            <h4>{pokemon.types?.[0].type.name}</h4>
                        </div>
                        <div className='type2'>
                            <h4>{pokemon.types?.[1]?.type.name}</h4>
                        </div>
                    </div>
                    <div className='pokemon-stats-skills'>
                        <div>
                            <h3>Skills</h3>
                        </div>
                        <div className='skills1'>
                            <h4> {pokemon.abilities?.[0].ability.name}</h4>
                        </div>
                        <div className='skills2'>
                            <h4> {pokemon.abilities?.[1].ability.name}</h4>
                        </div>
                    </div>
                </div>
                <div className='container-statis'>
                    <h1>Statis</h1>
                    <div className='statis'>
                        <h3>HP</h3>
                        <div className={`speed ${pokemon.types?.[0].type.name}`}>
                        <h4>{pokemon.stats?.[0].base_stat}/150</h4>
                        </div>
                    </div>
                    <div className='statis'>
                        <h3>ATTACK</h3>
                        <div className={`speed ${pokemon.types?.[0].type.name}`}>
                        <h4>{pokemon.stats?.[1].base_stat}/150</h4>
                        </div>
                    </div>
                    <div className='statis'>
                        <h3>DEFENSES</h3>
                        <div className={`speed ${pokemon.types?.[0].type.name}`}>
                            <h4>{pokemon.stats?.[2].base_stat}/150</h4>
                        </div>
                    </div>
                    <div className='statis'>
                        <h3>SPEED</h3>
                        <div className={`speed ${pokemon.types?.[0].type.name}`}>
                        <h4>{pokemon.stats?.[5].base_stat}/150</h4>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='container-movements'>
                <h1>Movements</h1>
                 <div className='moves'>
                 {
                    pokemon.moves?.map(move => (
                        <p>
                            {move.move.name}
                        </p>
                    ))
                }
                 </div>
            </div>
        </div>
    );
};

export default PokedexDetail;