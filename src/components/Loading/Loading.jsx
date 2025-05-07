import Typography, { TYPOGRAPHY_TYPES } from '@/src/components/Typography'

import './loading.css'

const Loading = () => {
  return (
    <Typography type={TYPOGRAPHY_TYPES.h5} classes="font-press-start loadingText">
      NOW LOADING
    </Typography>
  )
}

export default Loading