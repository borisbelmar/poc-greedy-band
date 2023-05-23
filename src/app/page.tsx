import Button from '@/frontend/components/common/Button'
import { trpc } from '@/utils/trpc'
import Link from 'next/link'

const characters = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

export default function Home (): JSX.Element {
  const result = trpc.quest.useQuery()
  console.log(result.data)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">
        Refugio
      </h1>
      {characters.map(character => (
        <Button
          key={character.id}
          as={Link}
          role="button"
          href={`/character/${character.id}`}
        >
          Character {character.id}
        </Button>
      ))}
      <Button
        as={Link}
        role="button"
        href="/town"
      >
        Ir al Pueblo
      </Button>
      <Button
        as={Link}
        role="button"
        href="/inventory"
      >
        Ver el inventario
      </Button>
    </div>
  )
}
