const pokeFetcher = async (poke) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  const pokemon = await response.json();
  console.log(pokemon);
}

export default pokeFetcher;