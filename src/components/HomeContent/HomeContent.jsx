'use client'

import { useState, Suspense } from 'react'
import Typography from '@/src/components/Typography'
import StartButton from '@/src/components/StartButton'
import GamesLoadingFallback from './GamesLoadingFallback'
import Carousel from '../Carousel'

const HomeContent = (props) => {
  const { gamesPromise } = props

  const [showCarousel, setShowCarousel] = useState(false)

  return ( 
  <>
    {!showCarousel && <StartButton setShowCarousel={setShowCarousel} />}
    {showCarousel && 
      <Suspense fallback={<GamesLoadingFallback />}>
        <Carousel gamesPromise={gamesPromise} setShowCarousel={setShowCarousel} />
      </Suspense>
    }
    </>
  )
}

export default HomeContent