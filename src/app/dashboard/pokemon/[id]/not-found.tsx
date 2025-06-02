import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Pokémon no encontrado</h1>
        <p className="text-lg text-gray-700 mb-6">No pudimos encontrar un Pokémon con ese ID o nombre.</p>
        <Link href="/dashboard" className="text-blue-600 underline hover:text-blue-800">
          Volver al listado
        </Link>
      </div>
    </div>
  )
}
