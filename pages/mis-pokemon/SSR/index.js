const PokemonSSR = ({ pokemons }) => {
  console.log(pokemons[0].name);
  return (
    <>
      <h2>PokemonSSR</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
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
export default PokemonSSR;
