import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';
import Ellipse from '../img/Ellipse 3.png'
import Ellipse4 from '../img/Ellipse 4.png'
import rectangle147 from '../img/Rectangle 147.png'
import rectangle148 from '../img/Rectangle 148.png'
import image12 from '../img/image 12.png'



const Pokedex = () => {
    const user = useSelector(state => state.user)

    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState('')
    const [type, setType] = useState([])
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                setPokemons(res.data.results)
                setNext(res.data.next)
                setPrevious(res.data.previous)
            })

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setType(res.data.results))
    }, [])
    console.log(pokemons)
    console.log(next)
    console.log(previous)
    // console.log(type)

    const search = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}`);
    }

    const filtertype = (e) => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const nextpage = () => {
        axios.get(next)
            .then(res => {
                setPokemons(res.data.results)
                setNext(res.data.next)
                setPrevious(res.data.previous)
            })
    }

    const previouspage = () => {
        axios.get(previous)
            .then(res => {
                setPokemons(res.data.results)
                setNext(res.data.next)
                setPrevious(res.data.previous)
            })
    }

    return (
        <div>
            {/* <div className='poke'>
                <img src={Ellipse} alt=""  className='aro'/>
                <img src={Ellipse4} alt="" className='aro2'/>
            </div> */}
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

            <p className='welcome-pokedex'>
                <span>Bienvenido {user},</span> aquí podrás encontrar tu pokemón favorito
            </p>
            <div className='pokedex-search'>
                <form onSubmit={search} >
                    <input
                        className='input-pokedex'
                        type="text"
                        value={pokemonSearch}
                        onChange={e => setPokemonSearch(e.target.value)}
                        placeholder='Buscar por nombre'
                    />
                    <button className='button-pokedex'>Search</button>

                </form>
                <select onChange={filtertype} className='select-pokedex'>
                    <option value="">Todos los pokemones</option>
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
            </div>
            <div className='container-card'>
                {
                    pokemons.map(pokemon => (
                        <PokemonItem pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.name ? pokemon.name : pokemon.pokemon.name} />
                    ))
                }
            </div>
            <div className='page'>
                {previous !== null ? <button onClick={previouspage}>
                    <i className="fa-solid fa-angles-left"></i>
                </button> : ' '}

                {next !== null ? <button onClick={nextpage}>
                    <i className="fa-solid fa-angles-right"></i>
                </button> : ' '}
            </div>
        </div>
    );
};

export default Pokedex;