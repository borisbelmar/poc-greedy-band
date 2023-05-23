import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

interface Props {
  params: {
    id: string
  }
}

export default function CharacterEquipmentPage ({ params }: Props): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-10">
      <h1 className="text-2xl">
        Character {params.id} equipment
      </h1>
      <p className="text-center">
        Aquí podrás gestionar y personalizar el equipo de tu personaje para asegurarte de estar preparado para cualquier desafío que se presente.
      </p>
      <Button
        as={Link}
        role="button"
        href={`/character/${params.id}/`}
      >
        Volver
      </Button>
    </div>
  )
}
