import Link from "next/link";
const PokemonSSG = ({ pokemons }) => {
  return pokemons.length ? (
    <>
      <h2>PokemonSSG</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/mis-pokemon/ISR/${pokemon.id}`}>
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2>Loading...</h2>
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
export default PokemonSSG;
