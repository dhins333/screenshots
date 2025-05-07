import Image from "next/image"
import { SPACING } from "@/src/lib/spacing";
import { useState } from "react";

import { gameCover } from './gameCover.module.css'
import { cn } from "@/src/lib/utils";
import Link from "next/link";

const GameCover = (props) => {
  const { game } = props
  
  return (
    <Link href={`/game/${game.documentId}`} className="perspective-distant">
      <div className="perspective-midrange">
      <Image 
        src={game.cover.url}
        width={SPACING.spacingCoverWidth}
        height={SPACING.spacingCoverHeight}
        alt={game.name}
        placeholder={game.coverBlur}
        className={cn('rounded-2xl', gameCover)}
      />
      </div>
      </Link>
  )
}

export default GameCover