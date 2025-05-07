'use client'

import { useState, useTransition } from 'react'
import StartButton from '@/src/components/StartButton'
import Carousel from '../Carousel'
import Loading from '../Loading'

const HomeContent = (props) => {
  const { getGames } = props

  const [gamesData, setGamesData] = useState(null)
  const [isGamesLoading, startGamesTransition] = useTransition()

  if (isGamesLoading) {
    return <Loading />
  }

  return ( 
  <>
    {!gamesData && <StartButton getGames={getGames} setGamesData={setGamesData} startGamesTransition={startGamesTransition} />}
    {gamesData && <Carousel data={gamesData} />}
  </>
  )
}

export default HomeContent