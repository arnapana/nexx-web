import React from 'react'
import { ImageLoader } from '@components/common'

import carouselConstant from '@constants/mock/carousel-home.json'

const CarouselSlider = () => {
  return (
    <div>
      <div className='relative h-[48rem]'>
        {carouselConstant.map((val, idx) => (
          <ImageLoader key={idx} layout='fill' src={val.src} />
        ))}
      </div>
    </div>
  )
}

export default CarouselSlider
