import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

export default function InventoryPage (): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-10">
      <h1 className="text-2xl">
        ¡Inventory Greedy Band!
      </h1>
      <p className="text-center">
        Aquí encontrarás todos los objetos y tesoros que has recolectado durante tus aventuras.
      </p>
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
