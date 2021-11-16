import Link from "next/link";

const PokemonISR = ({ pokemons }) => {
  return (
    <>
      <h2>PokemonISR</h2>
      {pokemons.map((pokemon) => (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={`/mis-pokemon/ISR/${pokemon.id}`} key={pokemon.id}>
          <p>* {pokemon.name}</p>
        </Link>
      ))}
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
