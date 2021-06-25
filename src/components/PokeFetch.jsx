const pokeFetch = async (poke = "ditto") => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  const pokemon = await response.json();
  return await pokemon;
}

export default pokeFetch;