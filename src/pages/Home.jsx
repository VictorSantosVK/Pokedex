import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/index.tsx';
import PokemonCard from '../components/pokemonCard/Index.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);


    useEffect(() => {
        getPokemons();
    }, []); // O array vazio garante que a função execute apenas uma vez

    // Função para buscar os pokemons da API
    const getPokemons = () => {
        let endpoints = [];

        for (let i = 1; i <= 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        
        // Faz as requisições em paralelo com axios.all
        axios.all(endpoints.map(endpoint => axios.get(endpoint)))
            .then(axios.spread((...responses) => {
     
                setPokemons(responses);
                setFilteredPokemons(responses);
            }))
            .catch(error => console.error("Erro ao buscar dados", error));
    };

    // Função para filtrar os pokemons pelo nome
    const pokemonFilter = (name) => {

        const filtered = pokemons.filter(pokemon =>
            pokemon.data.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredPokemons(filtered); 
    };

    return (
        <div>
            {}
            <Navbar pokemonFilter={pokemonFilter} />
            <div className="container mt-4">
                <div className="row mt-2">
                    {}
                    {filteredPokemons.map((pokemon, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <PokemonCard 
                                name={pokemon.data.name} 
                                image={pokemon.data.sprites.front_default} 
                                types={pokemon.data.types}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
