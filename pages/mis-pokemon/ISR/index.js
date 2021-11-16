const PokemonISR = ({ pokemons }) => {
  return (
    <>
      <h2>PokemonISR</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};
export const getStaticProps = async () => {
  const response = await fetch(
    `https://appi-pokemon-sqs.herokuapp.com/pokemon`
  );
  const newPokemons = await response.json();

  return {
    props: {
      pokemons: await newPokemons,
    },
  };
};

export default PokemonISR;
