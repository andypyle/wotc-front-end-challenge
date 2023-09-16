import {
  Container,
  Heading,
  PointsSpent,
  PointsSpentText,
  TalentPath,
  TalentPaths,
} from '@/components'
import { useTalentStore } from '@/stores/talents'
import { Lato } from 'next/font/google'
import Head from 'next/head'
import { useEffect } from 'react'

const lato = Lato({ style: 'normal', weight: '400', subsets: ['latin'] })

export default function Home() {
  const {
    fetchTalents,
    talentsData,
    selectedTalents,
    loading,
    selectTalent,
    maxSelectedTalents,
  } = useTalentStore()

  useEffect(() => {
    fetchTalents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <h1>Loading Talents...</h1>

  return (
    <>
      <Head>
        <title>Rune Mastery Loadout Talent Calculator 9000</title>
        <meta
          name="description"
          content="Rune Mastery Loadout Talent Calculator 9000"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Heading className={lato.className}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </Heading>
      <Container className={lato.className}>
        <TalentPaths>
          {Object.keys(talentsData).map((pathName: string) => (
            <TalentPath
              talentPathName={pathName}
              key={`talent-path-${pathName}`}
              talents={talentsData[pathName]}
            />
          ))}
        </TalentPaths>
        <PointsSpent>
          <span>
            {selectedTalents.length} / {maxSelectedTalents}
          </span>
          <PointsSpentText>Points Spent</PointsSpentText>
        </PointsSpent>
      </Container>
    </>
  )
}
