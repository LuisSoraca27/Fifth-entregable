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
        <div>
          <form onSubmit={submit}>
          <input type="text" 
            value={userName}
            onChange={e => setUserName(e.target.value)}
            />
            <button>submit</button>
          </form>
        </div>
    );
};

export default login;