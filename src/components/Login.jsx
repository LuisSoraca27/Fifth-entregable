import React, { useState } from 'react';
import { changeUser } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const login = () => {

    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName))
        navigate('/pokedex')
    }
    return (
        <div className='login'> 
          <h4>¡Hola entrenador!</h4>
          <h5>Para poder comenzar, dame tu nombre</h5>
          <form onSubmit={submit}>
          <input 
          className='input'
          type="text" 
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder='Tu nombre...'
            />
            <button className='button'>Comenzar</button>
          </form>
        </div>
    );
};

export default login;