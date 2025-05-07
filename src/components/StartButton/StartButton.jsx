'use client'

import Button from '@/src/components/Button'
import Typography, { TYPOGRAPHY_TYPES } from '../Typography'
import { toastQueue } from '../Toast'

const StartButton = (props) => {
  const { getGames, setGamesData, startGamesTransition } = props

  const handleStartPress = () => {
    startGamesTransition(async () => {
      try {
        const response = await getGames()
  
        if (response.error) throw new Error(response.error)
  
        setGamesData(response.data)
      }
      catch(e) {
        toastQueue.add(e.message, {
          timeout: 5000
        })
      }
    })
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