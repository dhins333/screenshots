'use client'

import { use } from 'react'
import Button from '@/src/components/Button'
import Typography, { TYPOGRAPHY_TYPES } from '../Typography'
import { api } from '@/src/lib/api'
import { URLS } from '@/src/lib/urls'

const StartButton = (props) => {
  const { setGamesData } = props

  const handleStartPress = () => {
    const data = use(api(URLS.getGames)) 

    setGamesData(data)
  }

  return (
    <Button onPress={handleStartPress}>
      <Typography type={TYPOGRAPHY_TYPES.h5} classes="font-press-start text-text2">
        PRESS START
      </Typography>
    </Button>
  )
}

export default StartButton