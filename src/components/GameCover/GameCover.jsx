import { cn } from '@/src/lib/utils'

import {
  front,
  back,
  left,
  right,
  cube
} from './gameCover.module.css'

const GameCover = () => {
  return (
    <article>
      <div className="perspective-distant h-cover-height w-cover-width">
        <div className={cn("h-full w-full transform-3d bg-transparent", cube)}>
          <div className={cn("absolute h-full w-full", front)}>Front</div>
          <div className={cn("absolute h-full w-full", back)}>Back</div>
          <div className={cn("absolute h-full w-16", left)}>Left</div>
          <div className={cn("absolute h-full w-16", right)}>Right</div>
        </div>
      </div>
    </article>
  )
}

export default GameCover