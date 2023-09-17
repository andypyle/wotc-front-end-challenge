import {
  Container,
  Heading,
  ImportShare,
  PointsSpent,
  PointsSpentText,
  TalentPath,
  TalentPaths,
} from '@/components'
import { useTalentStore } from '@/stores/talents'
import { Lato } from 'next/font/google'
import Head from 'next/head'
import { useEffect } from 'react'

export const lato = Lato({ style: 'normal', weight: '400', subsets: ['latin'] })

export default function Home() {
  const {
    fetchTalents,
    talentsData,
    selectedTalents,
    loading,
    maxSelectedTalents,
  } = useTalentStore()

  // We might have an api that takes race / class as an input and returns race / class specific talents, so
  // lets mock one, for fun!
  useEffect(() => {
    fetchTalents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return <Heading className={lato.className}>Loading Talents...</Heading>

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
      <ImportShare />
    </>
  )
}
