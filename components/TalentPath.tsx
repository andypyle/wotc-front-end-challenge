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

  &:first-of-type {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 999px) {
    flex-direction: row;
    flex: 1;

    &:not(:first-of-type) {
      margin-top: 1rem;
    }
  }
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
