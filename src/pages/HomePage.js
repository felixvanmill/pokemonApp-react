import React from 'react';
import '../styles/Homepage.css';  // Ensure this path is correct

function HomePage() {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add what to do on form submit, like making an API call
        alert('Login submitted!');
    };

    return (
        <div className="Loginboxframe">
            <div className="Loginframe">
                {/* Wrap inputs within a form tag */}
                <form onSubmit={handleSubmit} className="Frame3">
                    <div className="Emailframe">
                        {/* Use htmlFor instead of for */}
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="Passwordframe">
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div className="LoginButton">
                        <button type="submit">Login</button>
                    </div>
                    <div className="ForgotPass">
                        <div className="Rectangle1" />
                        <div className="ForgotPassText">Forgot password?</div>
                    </div>
                </form>
            </div>
            <div className="PokemonLogoBox">
            <img className="PokemonLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo" />
            </div>
        </div>
    );
}

export default HomePage;
