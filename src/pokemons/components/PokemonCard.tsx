import { SimplePokemon } from '@/pokemons'
import Image from 'next/image'
import Link from 'next/link'
import { IoHeart } from 'react-icons/io5'

interface Props {
  pokemon: SimplePokemon
}

const PokemonsCard = ({ pokemon }: Props) => {
  return (
    <div key={pokemon.id} className="relative max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

      <button
        className="absolute top-3 right-3 p-1 rounded-full bg-white shadow hover:scale-110 transition-transform"
        title="Agregar a favoritos"
      >
        <IoHeart size={20} className="text-red-500" />
      </button>

      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="relative w-24 h-24">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            fill
            className="object-contain drop-shadow-md"
            sizes="96px"
            priority
          />
        </div>

      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 capitalize">{pokemon.name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          Tipo: <span className="font-medium capitalize">{pokemon.name}</span>
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">#{pokemon.name}</span>
          <Link
            href={`/dashboard/pokemon/${pokemon.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full transition-colors"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  )
}

export { PokemonsCard }
