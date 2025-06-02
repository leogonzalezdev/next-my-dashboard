'use client'

import { useEffect } from 'react'
import { IoAlert } from 'react-icons/io5'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error capturado en el Error Boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 text-red-600 p-4 rounded-full">
            <IoAlert size={36} />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">¡Ups! Algo salió mal.</h1>
        <p className="text-gray-600 mb-4">
          Ocurrió un error inesperado. Por favor, intentá nuevamente.
        </p>

        <button
          onClick={() => reset()}
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Reintentar
        </button>
      </div>
    </div>
  )
}
