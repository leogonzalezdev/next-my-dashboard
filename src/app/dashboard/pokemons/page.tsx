import { PokemonsResponse, SimplePokemon, PokemonsGrid } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  
  return pokemons
}


const PokemonsPage = async () => {
  const pokemons = await getPokemons(20);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 my-6">
        Listado de Pokemons{' '}
        <small className="block sm:inline text-base sm:text-lg font-medium text-gray-500">
          (estático)
        </small>
      </h1>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonsPage