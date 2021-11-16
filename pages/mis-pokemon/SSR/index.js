import Link from "next/link";
const PokemonSSR = ({ pokemons }) => {
  return pokemons.length ? (
    <>
      <h2>PokemonSSR</h2>
      <ul className="list-group">
        {pokemons.map((pokemon) => (
          <li className="list-group-item" key={pokemon.id}>
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
