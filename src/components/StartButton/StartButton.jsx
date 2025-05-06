'use client'

import { useState } from 'react'
import Button from '@/src/components/Button'
import Typography, { TYPOGRAPHY_TYPES } from '../Typography'
import { api } from '@/src/lib/api'
import { URLS } from '@/src/lib/urls'
import { cn } from '@/src/lib/utils'

import './startButton.css'

const StartButton = () => {
  const [fetchingGames, setFetchingGames] = useState(false)

  const handleStartPress = async () => {
    setFetchingGames(true)

    const data = await api(URLS.getGames)

    setFetchingGames(false)
  }

  return (
    <Button isDisabled={fetchingGames} onPress={handleStartPress}>
      <Typography type={TYPOGRAPHY_TYPES.h5} classes={cn({
        'font-press-start': true,
        'text-text2': !fetchingGames,
        'text-text': fetchingGames,
        'startButtonLoadingText': fetchingGames
      })}>
        {fetchingGames ? 'NOW LOADING' : 'PRESS START'}
      </Typography>
    </Button>
  )
}

export default StartButton