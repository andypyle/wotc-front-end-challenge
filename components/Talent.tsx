import type { Talent as TalentType } from '@/pages/api/talents'
import { useTalentStore } from '@/stores/talents'
import styled from '@emotion/styled'
import { useMemo } from 'react'
import { Connector, TalentButton } from '.'

type TalentProps = {
  talent: TalentType
  index: number
}

export const TalentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
`

export const Talent: React.FC<TalentProps> = ({ talent, index }) => {
  const { selectTalent, selectedTalents, unselectTalent } = useTalentStore()
  const isSelected: boolean = useMemo(
    () => selectedTalents.map((t) => t.id).includes(talent.id),
    [selectedTalents, talent]
  )

  const selectedTalentsIds: number[] = useMemo(
    () => selectedTalents.map((t) => t.id),
    [selectedTalents]
  )

  const onClickSelectTalent = () => selectTalent(talent)

  const onRightClickUnselectTalent = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    unselectTalent(talent)
  }

  return (
    <TalentStyled>
      <TalentButton
        bgPos={talent.spriteOff}
        selected={isSelected}
        onClick={onClickSelectTalent}
        onContextMenu={onRightClickUnselectTalent}
        disabled={
          !talent.requirements.every((req) => selectedTalentsIds.includes(req))
        }
      />
      {index > 0 ? <Connector selected={isSelected} /> : null}
    </TalentStyled>
  )
}
