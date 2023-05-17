interface Props {
  params: {
    id: string
  }
}

export default function CharacterPage ({ params }: Props): JSX.Element {
  return (
    <>Character {params.id}</>
  )
}
