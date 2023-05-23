import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

export default function TownPage (): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">
        Town
      </h1>
      <Button
        as={Link}
        role="button"
        href="/town/store"
      >
        Tienda
      </Button>
      <Button
        as={Link}
        role="button"
        href="/town/inn"
      >
        Posada
      </Button>
      <Button
        as={Link}
        role="button"
        href="/"
      >
        Volver
      </Button>
    </div>
  )
}
