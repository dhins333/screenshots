'use client'

import { useState, Suspense } from 'react'
import StartButton from '@/src/components/StartButton'
import Carousel from '../Carousel'
import Loading from '../Loading'

const HomeContent = (props) => {
  const { gamesPromise } = props

  const [showCarousel, setShowCarousel] = useState(false)

  return ( 
  <>
    {!showCarousel && <StartButton setShowCarousel={setShowCarousel} />}
    {showCarousel && 
      <Suspense fallback={<Loading />}>
        <Carousel gamesPromise={gamesPromise} setShowCarousel={setShowCarousel} />
      </Suspense>
    }
    </>
  )
}

export default HomeContent