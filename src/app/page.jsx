import Header from "@/src/components/Header"
import Typography, { TYPOGRAPHY_TYPES } from "@/src/components/Typography"
import HomeContent from "@/src/components/HomeContent"

import { getGames as getGamesApi } from '@/src/lib/strapiClient'

const Home = () => {
  const getGames = async () => {
    'use server'

    return getGamesApi()
  }

  return (
      <>
      <Header />
      <main className="grow flex flex-col items-center justify-center gap-8">
        <Typography type={TYPOGRAPHY_TYPES.hero}>Video Game Screenshots</Typography>
        <HomeContent getGames={getGames} />
      </main>
      </>
  )
}


export default Home