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
          <h4>¡Hi coach!</h4>
          <h5>To start, give me your name</h5>
          <form onSubmit={submit}>
          <input 
          className='input'
          type="text" 
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder='Your name...'
            />
            <button className='button'>Start</button>
          </form>
        </div>
    );
};

export default login;