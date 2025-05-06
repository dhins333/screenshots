import { colors } from '@/src/lib/colors'
import { DynamicIcon } from 'lucide-react/dynamic'

const ICON_DEFAULT_SIZE = '1.5rem'
const ICON_DEFAULT_COLOR = colors.text2
const ICON_DEFAULT_STROKE_WIDTH = '0.125rem'

const Icon = (props) => {
  const  {name, backgroundColor, ...restProps} = props

  return <DynamicIcon name={name} size={ICON_DEFAULT_SIZE} color={ICON_DEFAULT_COLOR} strokeWidth={ICON_DEFAULT_STROKE_WIDTH} style={Boolean(backgroundColor) ? {
    backgroundColor
  } : {}} {...restProps}/>
}

export default Icon