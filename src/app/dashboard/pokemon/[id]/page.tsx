import { Pokemon } from "@/pokemons"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Metadata } from "next"

interface Props {
  params: { id: string }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  if (!res.ok) {
    notFound()
  }

  return res.json()
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  if (!res.ok) notFound()

  const { id, name } = await res.json()

  return {
    title: `#${id} - ${name}`,
    description: `Página del Pokemon ${name}`,
  }
}


const PokemonPage = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-200 p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src={
                  pokemon.sprites.other?.dream_world?.front_default ||
                  pokemon.sprites.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold capitalize text-gray-800 mb-4">
              {pokemon.name}{" "}
              <span className="text-gray-500 text-3xl font-medium">#{pokemon.id}</span>
            </h1>

            <p className="text-gray-600 text-lg mb-4">
              Altura: <strong>{pokemon.height / 10} m</strong> | Peso: <strong>{pokemon.weight / 10} kg</strong>
            </p>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Tipos:</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className="px-3 py-1 rounded-full text-white text-sm font-semibold capitalize bg-gradient-to-r from-indigo-500 to-purple-600"
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-1">Habilidades:</h2>
              <ul className="list-disc list-inside text-gray-600 text-base">
                {pokemon.abilities.map(({ ability }) => (
                  <li key={ability?.name} className="capitalize">{ability?.name}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PokemonPage
