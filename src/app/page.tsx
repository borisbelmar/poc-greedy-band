import Link from 'next/link'

const characters = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

export default function Home (): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">
        Refugio
      </h1>
      {characters.map(character => (
        <Link
          key={character.id}
          role="button"
          className="block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          href={`/character/${character.id}`}
        >
          Character {character.id}
        </Link>
      ))}
      <Link
        role="button"
        className="block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        href="/town"
      >
        Ir al Pueblo
      </Link>
      <Link
        role="button"
        className="block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        href="/inventory"
      >
        Ver el inventario
      </Link>
    </div>
  )
}
