'use client'

import { useState, Suspense } from 'react'
import Typography from '@/src/components/Typography'
import StartButton from '@/src/components/StartButton'
import GamesLoadingFallback from './GamesLoadingFallback'

const HomeContent = () => {
  const [gamesData, setGamesData] = useState(null)

  if (gamesData) return <section><Typography>Carousel</Typography></section>

  return (
    <Suspense fallback={<GamesLoadingFallback />}>
      <StartButton setGamesData={setGamesData}/>
    </Suspense>
  )
}

export default HomeContent