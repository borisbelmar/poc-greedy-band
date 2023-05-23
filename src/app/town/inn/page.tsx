import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

export default function TownInnPage (): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-10">
      <h1 className="text-2xl">
        ¡Town in Greedy Band!
      </h1>
      <p className="text-center">
        Después de un largo día de aventuras y batallas, este es el lugar perfecto para descansar y recargar energías.
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
