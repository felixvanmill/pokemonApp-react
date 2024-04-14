import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import '../App.css'; // Ensure this is correct

function PokemonDetails() {
    const { pokemonId } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                setPokemonDetails(data);
            } catch (err) {
                setError('Failed to fetch Pokémon details');
            } finally {
                setLoading(false);
            }
        }
        fetchPokemonDetails();
    }, [pokemonId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <BackButton style={{ margin: '20px', padding: '10px' }} />
            {pokemonDetails && (
                <div>
                    <h1>{pokemonDetails.name} (#{pokemonDetails.id})</h1>
                    <p>Height: {pokemonDetails.height}</p>
                    <p>Weight: {pokemonDetails.weight}</p>
                    <h2>Types</h2>
                    <ul>
                        {pokemonDetails.types.map((typeEntry, index) => (
                            <li key={index}>{typeEntry.type.name}</li>
                        ))}
                    </ul>
                    <h2>Abilities</h2>
                    <ul>
                        {pokemonDetails.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
                    <h2>Statistics</h2>
                    <ul>
                        {pokemonDetails.stats.map((stat, index) => (
                            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PokemonDetails;
