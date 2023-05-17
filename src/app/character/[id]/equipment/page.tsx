interface Props {
  params: {
    id: string
  }
}

export default function CharacterEquipmentPage ({ params }: Props): JSX.Element {
  return (
    <>Character {params.id} equipment</>
  )
}
