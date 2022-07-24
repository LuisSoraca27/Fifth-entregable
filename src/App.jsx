import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexDetail />} />
          </Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
