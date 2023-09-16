import type { Talent as TalentType } from '@/pages/api/talents'
import styled from '@emotion/styled'
import { Talent, TalentPathName, Talents } from '.'

export type TalentPathProps = {
  talentPathName: string
  talents: TalentType[]
}

export const TalentPathStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const TalentPath: React.FC<TalentPathProps> = ({
  talentPathName,
  talents = [],
}) => {
  return (
    <TalentPathStyled>
      <TalentPathName>
        <h2>{talentPathName}</h2>
      </TalentPathName>
      <Talents>
        {talents.map((t, i) => (
          <Talent talent={t} key={`talent-${t.id}`} index={i} />
        ))}
      </Talents>
    </TalentPathStyled>
  )
}
