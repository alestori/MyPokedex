export const pokeFetch = async (poke = "ditto") => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const pokemon = await response.json();
    return await pokemon;
  } catch (e) {
    console.log(e);
    return await pokeFetch();
  }
}

export default pokeFetch;