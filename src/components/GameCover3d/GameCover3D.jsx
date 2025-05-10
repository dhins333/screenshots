import { cn } from '@/src/lib/utils'

import {
  front,
  back,
  left,
  right,
  cube,
  activeCover
} from './gameCover.module.css'
import Link from 'next/link'
import { SPACING } from '@/src/lib/spacing'
import Image from 'next/image'

const GameCover3D = ({ slideNumber, currentSlideIndex, game }) => {
  return (
    <article>
      <div className="perspective-distant h-cover-height w-cover-width">
        <div className={cn("h-full w-full transform-3d bg-transparent", cube, slideNumber === currentSlideIndex && activeCover)} style={{
          transform: `rotateY(${15 * (currentSlideIndex - slideNumber)}deg) translateZ(${5 * (currentSlideIndex - slideNumber)}px)`
        }}>
          <div className={cn("absolute h-full w-full", front)}>
            <Image 
              src={game.cover.url}
              width={SPACING.spacingCoverWidth}
              height={SPACING.spacingCoverHeight}
              alt={game.name}
              placeholder={game.coverBlur}
            />
          </div>
          <div className={cn("absolute h-full w-8 bg-no-repeat bg-cover", left)} style={{
            backgroundImage: `url(${game.coverBlur})`
          }} />
          <div className={cn("absolute h-full w-8 bg-no-repeat bg-cover", right)} style={{
            backgroundImage: `url(${game.coverBlur})`
          }} />
        </div>
      </div>
    </article>
  )
}

export default GameCover3D