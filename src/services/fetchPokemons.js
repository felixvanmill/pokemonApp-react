const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

// Helper function to fetch data from a URL and parse JSON
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};

// Function to fetch additional details for each Pokémon
const fetchPokemonDetails = async (url) => {
    const data = await fetchData(url);
    const imageUrl = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
    return {
        id: data.id,
        image: imageUrl
    };
};

export const fetchPokemons = async () => {
    const data = await fetchData(`${API_BASE_URL}?limit=151`);
    const pokemonsWithDetails = await Promise.all(
        data.results.map(async pokemon => {
            const details = await fetchPokemonDetails(pokemon.url);
            return {
                name: pokemon.name,
                ...details // Spread the additional details into the result
            };
        })
    );
    return pokemonsWithDetails;
};
