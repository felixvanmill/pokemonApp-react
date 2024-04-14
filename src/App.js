// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import PokemonDetails from './pages/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon" element={<PokemonPage />} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
