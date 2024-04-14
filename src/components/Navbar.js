import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../styles/NavBar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pokemon">Pokemon</Link></li>
                {/* Add additional links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
