import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=20`
      );
      const newPokemons = await response.json();

      setPokemons([...newPokemons.results]);
    })();
  }, []);

  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}> {pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokemon;
