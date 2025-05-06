import Typography, { TYPOGRAPHY_TYPES } from '@/src/components/Typography'

import './gamesLoadingFallback.css'

const GamesLoadingFallback = () => {
  return (
    <Typography type={TYPOGRAPHY_TYPES.h5} classes="font-press-start startButtonLoadingText">
      NOW LOADING
    </Typography>
  )
}

export default GamesLoadingFallback