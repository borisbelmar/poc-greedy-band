import Button from '@/frontend/components/common/Button'
import Link from 'next/link'

interface Props {
  params: {
    id: string
  }
}

export default function CharacterQuestsPage ({ params }: Props): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-10">
    <h1 className="text-2xl">
      Character {params.id} quests
    </h1>
    <p className="text-center">
      Aquí podrás explorar una amplia variedad de emocionantes misiones que te llevarán a través de intrigantes historias y desafíos en el mundo de Greedy Band.
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
