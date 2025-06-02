import { SimplePokemon, PokemonsCard } from '@/pokemons'

interface Props {
  pokemons: SimplePokemon[]
}

const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="min-h-screen max-h-full  overflow-auto bg-gray-100 p-4">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pokemons.map((pokemon) => (
          <PokemonsCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export { PokemonsGrid }
