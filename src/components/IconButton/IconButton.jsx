'use client'

import { cn } from '@/src/lib/utils'
import { useRef } from 'react'
import { useButton } from 'react-aria'
import Icon from '../Icon/Icon'

const IconButton = (props) => {
  const ref = useRef(null)

  const { buttonProps } = useButton(props, ref)

  const {  buttonClasses, iconProps } = props

  return (
    <button {...buttonProps} className={cn('shadow-icon-button rounded-3xl cursor-pointer relative active:top-1', buttonClasses)}>
      <Icon {...iconProps} />
    </button>
  )
}

export default IconButton