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

  return pokemons.lengh ? (
    <>
      <h2>Pokemon</h2>
      <ul className="list-group">
        {pokemons.map((pokemon) => (
          <li className="list-group-item" key={pokemon.name}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Pokemon;
