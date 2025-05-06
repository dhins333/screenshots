import { use, useEffect, useRef, useState } from "react"
import { toastQueue } from "../Toast"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Typography from "../Typography";

import 'swiper/css';
import 'swiper/css/pagination';

import './carousel.css'
import { SPACING } from "@/src/lib/spacing";

const Carousel = (props) => {
  const { gamesPromise, setShowCarousel } = props

  const errorShown = useRef(false)

  const response = use(gamesPromise)

  useEffect(() => {
    if (response.error && !errorShown.current) {
      setShowCarousel(false)
      toastQueue.add(response.error, {
        timeout: 5000
      })
    errorShown.current = true
    }
  }, [response])

  if (response.error) return null

  console.log(response)

  return (
    <Swiper 
      slidesPerView='auto'
      centeredSlides={true}
      tag='ul'
      spaceBetween={48}
    >
      {
        response.data.map((game) => {
          return (
            <SwiperSlide tag='li'  key={game.documentId}>
              <Image 
                src={game.cover.url}
                width={SPACING.spacingCoverWidth}
                height={SPACING.spacingCoverHeight}
                alt={game.name}
                placeholder={game.coverBlur}
                className='rounded-2xl'
                style={{
                  boxShadow: `${game.dominantColor} 0px 0px 14px 2px`
                }}
              />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default Carousel