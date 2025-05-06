import { Press_Start_2P } from 'next/font/google'

import { cn } from '@/src/lib/utils'

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press-start",
  weight: "400",
});

export const TYPOGRAPHY_TYPES = {
  body: 'body',
  small: 'small',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  hero: 'hero'
} 

const Typography = (props) => {
  const { type, children, classes = '', ...restProps } = props

  switch (type) {
    case TYPOGRAPHY_TYPES.body:
      return <p className={cn('text-base font-normal text-text', classes)} {...restProps}>{children}</p>

    case TYPOGRAPHY_TYPES.small:
      return <p className={cn('text-sm font-normal text-text', classes)} {...restProps}>{children}</p>

    case TYPOGRAPHY_TYPES.h1:
      return <h1 className={cn('text-xl font-bold text-text', classes)} {...restProps}>{children}</h1>

    case TYPOGRAPHY_TYPES.h2:
      return <h2 className={cn('text-2xl font-bold text-text', classes)} {...restProps}>{children}</h2>

    case TYPOGRAPHY_TYPES.h3:
      return <h3 className={cn(' text-3xl font-bold text-text', classes)} {...restProps}>{children}</h3>

    case TYPOGRAPHY_TYPES.h4:
      return <h4 className={cn(' text-4xl font-bold text-text', classes)} {...restProps}>{children}</h4>

    case TYPOGRAPHY_TYPES.h5:
      return <h5 className={cn(' text-5xl font-bold text-text', classes)} {...restProps}>{children}</h5>

    case TYPOGRAPHY_TYPES.hero:
      return <h1 className={cn('font-press-start text-3xl font-normal text-text')} {...restProps}>{children}</h1>

    default:
      return <p className={cn('text-base font-normal text-text', pressStart2P.className, classes)}{...restProps}>{children}</p>
  }
}

export default Typography