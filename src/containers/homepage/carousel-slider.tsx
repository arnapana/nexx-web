import React from 'react'
import Slider from 'react-slick'
import { ImageLoader } from '@components/common'

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
              <div className='relative w-full h-full'>
                {/* Image Carousel */}
                <div className='w-full h-full bg-[url("/images/carousel/asian-young-fem.png")] bg-no-repeat bg-cover bg-center' />
                {/* <ImageLoader src={val.src} alt={val.alt} layout='fill' /> */}
              </div>
              {/* Content */}
              <div className='absolute text-white left-[300px] top-28'>
                <div className='mb-4'>
                  <h1 className='font-poppins font-semibold drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] text-[5.8rem]'>
                    NEXX Pharma
                  </h1>
                  <span className='font-poppins drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-semibold text-6xl'>
                    Connecting Healthy
                  </span>
                </div>
                <div>
                  <p className='font-prompts drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-medium text-5xl'>
                    เชื่อมสุขภาพดีให้ถึงกัน
                  </p>
                </div>
                <div className='absolute top-10 -right-36'>
                  <ImageLoader src='/images/carousel/left-arrow-green.png' width={137} height={85} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CarouselSlider
