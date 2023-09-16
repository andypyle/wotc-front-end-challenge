import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

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
      <main className={inter.className}>Hello, Wizards!</main>
    </>
  )
}
