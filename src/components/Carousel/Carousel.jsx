import { use, useEffect, useRef, useState } from "react"
import { toastQueue } from "../Toast"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Typography from "../Typography";

import 'swiper/css';
import 'swiper/css/pagination';

import './carousel.css'
import { SPACING } from "@/src/lib/spacing";
import GameCover from "../GameCover";
import IconButton from "../IconButton";
import Icon from "../Icon";
import { cn } from "@/src/lib/utils";

const Carousel = (props) => {
  const { gamesPromise, setShowCarousel } = props

  const [swiperInstance, setSwiperInstance] = useState(null)
  const [isSwiperAtBeginning, setIsSwiperAtBeginning] = useState(true)
  const [isSwiperAtEnd, setIsSwiperAtEnd] = useState(false)

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

  const handleSwiperControlButtonsPress = (isPrev) => {
    return () => {
      if (isPrev) {
        swiperInstance.slidePrev()
      }
      else {
        swiperInstance.slideNext()
      }
    }
  }
  
  const renderSwiperControls = () => {
    return (
      <section className='flex gap-20 animate-fade-in'>
        <IconButton iconProps={{
          name: 'arrow-left',
          size: 48
        }} buttonClasses={cn({
         'invisible' : isSwiperAtBeginning,
        })} 
        onPress={handleSwiperControlButtonsPress(true)}
        />
        <IconButton iconProps={{
          name: 'arrow-right',
          size: 48
        }} buttonClasses={cn({
          'invisible' : isSwiperAtEnd,
         })}
         onPress={handleSwiperControlButtonsPress(false)}
         />
      </section>
    )
  }

  return (
    <>
    <Swiper 
      slidesPerView='auto'
      centeredSlides={true}
      tag='ul'
      spaceBetween={48}
      noSwiping={true}
      onSwiper={(swiper) => { setSwiperInstance(swiper) }}
      onSlideChange={(swiper) => {
        if (swiper.isBeginning) {
          setIsSwiperAtBeginning(true)
        }
        else {
          setIsSwiperAtBeginning(false)
        }

        if (swiper.isEnd) {
          setIsSwiperAtEnd(true)
        }
        else {
          setIsSwiperAtEnd(false)
        }
      }}
    >
      {
        response.data.map((game) => {
          return (
            <SwiperSlide tag='li'  key={game.documentId} className='swiper-no-swiping'>
                <GameCover game={game} />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    {renderSwiperControls()}
    </>
  )
}

export default Carousel