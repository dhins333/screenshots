'use client'

import Button from '@/src/components/Button'
import Typography, { TYPOGRAPHY_TYPES } from '../Typography'

const StartButton = () => {
  return (
    <Button>
      <Typography type={TYPOGRAPHY_TYPES.h5} classes='font-press-start text-text2'>PRESS START</Typography>
    </Button>
  )
}

export default StartButton