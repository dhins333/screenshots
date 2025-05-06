'use client'

import { useRef } from "react"
import { useButton } from "react-aria"

const Button = (props) => {
  const { children } = props

  const ref = useRef(null)

  const { buttonProps } = useButton(props, ref)

  return (
    <button {...buttonProps} ref={ref} className='bg-primary p-4 relative active:top-2 cursor-pointer shadow-button'>
      {children}
    </button>
  )
}

export default Button