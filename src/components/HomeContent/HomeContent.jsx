'use client'

import { useState, useTransition } from 'react'
import StartButton from '@/src/components/StartButton'
import Carousel from '../Carousel'
import Loading from '../Loading'
import Typography, { TYPOGRAPHY_TYPES } from '../Typography'

const DEFAULT_TITLE = 'Video Game Screenshots'

const HomeContent = (props) => {
  const { getGames } = props

  const [gamesData, setGamesData] = useState(null)
  const [isGamesLoading, startGamesTransition] = useTransition()
  const [pagetitle, setPageTitle] = useState(DEFAULT_TITLE)

  if (isGamesLoading) {
    return <Loading />
  }

  return ( 
  <>
    <Typography type={pagetitle === DEFAULT_TITLE ? TYPOGRAPHY_TYPES.hero : TYPOGRAPHY_TYPES.h4} classes="font-press-start">{pagetitle}</Typography>
    {!gamesData && <StartButton getGames={getGames} setGamesData={setGamesData} startGamesTransition={startGamesTransition} />}
    {gamesData && <Carousel setPageTitle={setPageTitle} data={gamesData} />}
  </>
  )
}

export default HomeContent