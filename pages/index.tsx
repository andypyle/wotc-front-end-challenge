import {
  Container,
  PointsRemaining,
  Talent,
  TalentButton,
  TalentPath,
  TalentPathName,
} from '@/components'
import { Lato } from 'next/font/google'
import Head from 'next/head'

const lato = Lato({ style: 'normal', weight: '400', subsets: ['latin'] })

export default function Home() {
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
      <Container className={lato.className}>
        <div>
          <TalentPath>
            <TalentPathName>NAME</TalentPathName>
            <Talent>
              <TalentButton>1</TalentButton>
            </Talent>
            <Talent>
              <TalentButton>2</TalentButton>
            </Talent>
            <Talent>
              <TalentButton>3</TalentButton>
            </Talent>
            <Talent>
              <TalentButton>4</TalentButton>
            </Talent>
          </TalentPath>

          <TalentPath>
            <TalentPathName>NAME</TalentPathName>
            <Talent>
              <TalentButton>1</TalentButton>
            </Talent>
            <Talent>
              <TalentButton>2</TalentButton>
            </Talent>
            <Talent>
              <TalentButton>3</TalentButton>
            </Talent>
            <Talent>
              <TalentButton>4</TalentButton>
            </Talent>
          </TalentPath>
        </div>
        <PointsRemaining>3/6 Points Remaining</PointsRemaining>
      </Container>
    </>
  )
}
