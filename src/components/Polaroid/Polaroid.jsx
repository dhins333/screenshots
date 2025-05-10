'use client'

import { useState } from 'react' 
import Image from 'next/image'
import Typography from '../Typography'

import { picture } from './picture.module.css'
import { cn } from '@/src/lib/utils'
import Link from 'next/link'



const Polaroid = ({ imageBlur, thumb, title, rotateDeg, sign, id }) => {
  const [hovered, setHovered] = useState(false)
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect() 

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if ((distanceX < 0 && distanceY < 0) || (distanceX >= 0 && distanceY >= 0)) {
      setRotate({
        x: -distanceX / 10,
        y: distanceY / 10
      })
    }
    else {
      setRotate({
        x: distanceX / 10,
        y: -distanceY / 10
      })
    }
  }

  return (
    <li className='perspective-distant'>
      <Link href={`/screenshot/${id}`} className={cn({
        'bg-primary px-2 pt-4 transform-3d block': true,
        'z-0': !hovered,
        'z-10': hovered,
        [picture]: true
      })} style={{
        transform: hovered ? `translateZ(10px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : `translateZ(10px) rotateZ(${sign === 1 ? '' : '-'}${rotateDeg}deg)`,
      }}
      onMouseMoveCapture={handleMouseMove}
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
      >
        <Image 
          width="1280"
          height="720"
          src={thumb.url}
          alt={title}
          blurDataURL={imageBlur}
        />
        <Typography classes='text-text2 mt-4 pb-4'>{title}</Typography>
      </Link>
    </li>
  )
}

export default Polaroid