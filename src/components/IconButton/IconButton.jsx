'use client'

import { cn } from '@/src/lib/utils'
import { useRef } from 'react'
import { useButton } from 'react-aria'

const IconButton = (props) => {
  const ref = useRef(null)

  const { buttonProps } = useButton(props, ref)

  const { children, classes } = props

  return (
    <button {...buttonProps} className={cn('shadow-icon-button rounded-3xl cursor-pointer relative active:top-1', classes)}>
      {children}
    </button>
  )
}

export default IconButton