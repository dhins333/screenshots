import Header from "@/src/components/Header"
import Typography, { TYPOGRAPHY_TYPES } from "@/src/components/Typography"
import HomeContent from "@/src/components/HomeContent"

import { getGames as getGamesApi } from '@/src/lib/strapiClient'
import GameCover3D from "../components/GameCover3d"

const Home = () => {
  const getGames = async () => {
    'use server'

    return getGamesApi()
  }

  return (
      <div id='backgroundContainer' className='bg-black bg-no-repeat bg-cover bg-fixed min-h-screen'>
        <div className='min-h-screen flex flex-col'         style={{
          boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.6)',
          backdropFilter: 'blur(4px)',
        }}>
        <Header />
        <main className="grow flex flex-col items-center justify-center gap-8 mb-28">
          <HomeContent getGames={getGames} />
        </main>
        </div>
      </div>
  )
}


export default Home