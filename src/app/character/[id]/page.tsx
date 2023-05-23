import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

interface Props {
  params: {
    id: string
  }
}

export default function CharacterPage ({ params }: Props): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-10">
      <h1 className="text-2xl">
        Character {params.id}
      </h1>
      <p className="text-center">
        Aquí podrás crear y personalizar tu propio héroe o heroína.
      </p>
      <Button
        as={Link}
        role="button"
        href={`/character/${params.id}/equipment`}
      >
        Equipment
      </Button>
      <Button
        as={Link}
        role="button"
        href={`/character/${params.id}/quests`}
      >
        Quests
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
