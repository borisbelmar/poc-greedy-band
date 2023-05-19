import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

export default function TownStorePage (): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-10">
      <h1 className="text-2xl">
        ¡Store Greedy Band!
      </h1>
      <p className="text-center">
        En nuestra tienda, podrás encontrar todo lo necesario para asegurarte la victoria en cada batalla.
      </p>
      <Button
        as={Link}
        role="button"
        href="/town"
      >
        Volver
      </Button>
    </div>
  )
}
