import React, { useState } from 'react';
import '../styles/Homepage.css';

function HomePage() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isRegistering) {
            if (password !== confirmPassword) {
                setPasswordError("Passwords do not match!");
                return;
            }
            alert("Registration submitted!");
        } else {
            alert("Login submitted!");
        }
    };

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordError(password !== e.target.value ? "Passwords do not match!" : "");
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
    };

    return (
        <div className="Loginboxframe">
            <div className="Loginframe">
                <div style={{ width: "200%", position: "relative" }}>
                    <form onSubmit={handleSubmit} className={`Frame3 ${isRegistering ? 'hiddenForm' : 'visibleForm'}`}>
                        <div className="Emailframe">
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                        </div>
                        <div className="Passwordframe">
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" required />
                        </div>
                        <div className="LoginButton">
                            <button type="submit">Login</button>
                        </div>
                        <div className="RegisterToggle">
                            <button type="button" onClick={toggleForm}>
                                New here? Register!
                            </button>
                        </div>
                    </form>

                    <form onSubmit={handleSubmit} className={`Frame3 ${isRegistering ? 'visibleForm' : 'hiddenForm'}`}>
                        <div className="Emailframe">
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                        </div>
                        <div className="Passwordframe">
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" required />
                        </div>
                        <div className="Passwordframe">
                            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm your password" required />
                        </div>
                        {passwordError && <p className="password-error">{passwordError}</p>}
                        <div className="LoginButton">
                            <button type="submit">Register</button>
                        </div>
                        <div className="RegisterToggle">
                            <button type="button" onClick={toggleForm}>
                                Go to Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="PokemonLogoBox">
                <img className="PokemonLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo" />
            </div>
        </div>
    );
}

export default HomePage;
