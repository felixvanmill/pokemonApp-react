import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Ensure your CSS path is correct

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navigation">
                <div className="Frame2">
                    <div className="Home"><Link to="/" className="NavLink">Home</Link></div>
                    <div className="Line1"></div>
                    <div className="PokMon"><Link to="/pokemon" className="NavLink">Pokémon</Link></div>
                    <div className="Line2"></div>
                    <div className="Items"><Link to="/items" className="NavLink">Items</Link></div>
                    <div className="Line3"></div>
                    <div className="Account"><Link to="/account" className="NavLink">Account</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
