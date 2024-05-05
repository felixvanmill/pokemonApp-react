// src/pages/LogInPage.js
import React, { useState } from 'react';
import '../styles/Homepage.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://api.datavortex.nl/pokemonapp';
const API_KEY = 'pokemonapp:uHlwzGrkpZ45KU8J22aU';

function LogInPage() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverMessage, setServerMessage] = useState("");
    const [serverError, setServerError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setServerMessage("");
        setServerError("");

        if (!validateEmail(email)) {
            setServerError("Invalid email format.");
            return;
        }

        if (isRegistering) {
            // Registration Logic
            if (password !== confirmPassword) {
                setPasswordError("Passwords do not match!");
                return;
            }

            const requestBody = {
                username: email,
                email: email,
                password: password,
                info: "",
                authorities: [{ authority: "USER" }],
            };

            try {
                const response = await fetch(`${API_BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': API_KEY,
                    },
                    body: JSON.stringify(requestBody),
                });

                if (response.ok) {
                    setServerMessage("Registration successful!");
                    login(email);
                    navigate('/');
                } else if (response.status === 409) {
                    setServerError("User already exists.");
                } else {
                    const errorData = await response.json();
                    setServerError(`Registration failed: ${errorData.message || 'Unknown error'}.`);
                }
            } catch (error) {
                setServerError("An error occurred during registration.");
            }

        } else {
            // Login Logic
            const requestBody = {
                username: email,
                password: password,
            };

            try {
                const response = await fetch(`${API_BASE_URL}/users/authenticate`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': API_KEY,
                    },
                    body: JSON.stringify(requestBody),
                });

                if (response.ok) {
                    const data = await response.json();
                    setServerMessage("Login successful!");
                    login(email);
                    navigate('/');
                    console.log("JWT Token:", data.token);
                } else {
                    const errorData = await response.json();
                    setServerError(`Login failed: ${errorData.message || 'Unknown error'}.`);
                }
            } catch (error) {
                setServerError("An error occurred during login.");
            }
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
        setServerMessage("");
        setServerError("");
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
                        <div class="Passwordframe">
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" required />
                        </div>
                        <div class="Passwordframe">
                            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm your password" required />
                        </div>
                        {passwordError && <p class="password-error">{passwordError}</p>}
                        <div class="LoginButton">
                            <button type="submit">Register</button>
                        </div>
                        <div class="RegisterToggle">
                            <button type="button" onClick={toggleForm}>
                                Go to Login
                            </button>
                        </div>
                    </form>

                    {/* Display Server Message */}
                    {serverMessage && <p class="server-message">{serverMessage}</p>}
                    {serverError && <p class="server-message error">{serverError}</p>}
                </div>
            </div>
            <div class="PokemonLogoBox">
                <img class="PokemonLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo" />
            </div>
        </div>
    );
}

export default LogInPage;
