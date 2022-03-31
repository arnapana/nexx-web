import React from 'react'
import Slider from 'react-slick'
import { ButtonContact } from '@components/index'

import carouselConstant from '@constants/mock/carousel-home.json'

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    appendDots: (dots: any) => (
      <div className=''>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    )
  }
  return (
    <section id='Carousel' className=''>
      <div className='relative overflow-hidden'>
        <Slider {...settings}>
          {carouselConstant.map((val, idx) => (
            <div key={idx} className='relative h-[48rem]'>
              {/* Image Carousel */}
              <img src={val.src} alt={val.alt} />

              {/* Content */}
              <div className='absolute text-white left-[300px] top-28'>
                <div className='mb-12'>
                  <h1 className='font-poppins drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-bold text-[4rem]'>
                    NEXX Pharma
                  </h1>
                  <span className='font-poppins drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-bold text-5xl'>
                    Connecting Healthy
                  </span>
                </div>
                <div>
                  <p className='font-prompts drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-medium text-5xl'>
                    เชื่อมสุขภาพดีให้ถึงกัน
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Button Contact */}
        <div className='absolute bottom-5 right-28'>
          <ButtonContact />
        </div>
      </div>
    </section>
  )
}

export default CarouselSlider
