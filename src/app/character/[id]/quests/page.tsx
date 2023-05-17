interface Props {
  params: {
    id: string
  }
}

export default function CharacterQuestsPage ({ params }: Props): JSX.Element {
  return (
    <>Character {params.id} quests</>
  )
}
