// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import PokemonPage from './pages/PokemonPage';
import PokemonDetails from './pages/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/pokemon" element={<PokemonPage />} />
                    <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
