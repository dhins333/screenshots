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
import GameCover3D from "../GameCover3d";
import Link from "next/link";

const Carousel = (props) => {
  const { data, setPageTitle } = props

  const [swiperInstance, setSwiperInstance] = useState(null)
  const [isSwiperAtBeginning, setIsSwiperAtBeginning] = useState(true)
  const [isSwiperAtEnd, setIsSwiperAtEnd] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(() => {
    const backgroundContainer = document.querySelector('#backgroundContainer')

    backgroundContainer.style.backgroundImage = `url(${data[currentSlideIndex].background.url})`

    setPageTitle(data[currentSlideIndex].name)
  }, [currentSlideIndex])

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
      <section className='flex gap-20 animate-fade-in items-center'>
        <IconButton iconProps={{
          name: 'arrow-left',
          size: 48
        }} buttonClasses={cn({
         'invisible' : isSwiperAtBeginning,
        })} 
        onPress={handleSwiperControlButtonsPress(true)}
        />
        <Link href={`/game/${data[currentSlideIndex].documentId}`} className='animate-fade-in'>
          <IconButton iconProps={{
              name: 'play',
              size: 48
            }} 
            buttonClasses='rounded-none bg-primary'
          />
        </Link>
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
      tag='section'
      wrapperTag="ul"
      spaceBetween={64}
      noSwiping={true}
      onSwiper={(swiper) => { setSwiperInstance(swiper) }}
      onSlideChange={(swiper) => {
        setCurrentSlideIndex(swiper.activeIndex)

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
        data.map((game, index) => {
          return (
            <SwiperSlide tag='li'  key={game.documentId} className='swiper-no-swiping'>
                <GameCover3D game={game} currentSlideIndex={currentSlideIndex} slideNumber={index} />
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