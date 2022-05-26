import React from 'react'
import Slider from 'react-slick'
import * as _ from 'lodash'
import classNames from 'classnames'
import { ImageLoader } from '@components/common'

import carouselConstant from '@constants/mock/carousel-home.json'
import { ICarousel } from 'pages/aboutus'
import { NextPage } from 'next'

interface Props {
  carousels: ICarousel[]
}

export const CarouselSlider: NextPage<Props> = ({ carousels }) => {
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
      <div className='overflow-hidden relative'>
        <Slider {...settings}>
          {_.map(carousels, (val, idx) => (
            <div key={idx} className='relative '>
              <div className='relative w-full h-full'>
                {/* Image Carousel */}
                {val.imgSrcMobile && (
                  <div
                    className={classNames(
                      { 'block lg:hidden': val.imgSrcMobile },
                      `relative h-[30rem] bg-cover bg-center bg-no-repeat`,
                      'md:h-[40rem]'
                    )}
                  >
                    <ImageLoader src={val.imgSrcMobile} layout='fill' objectFit='cover' priority={true} />
                  </div>
                )}
                <div
                  className={classNames(
                    { 'hidden lg:block': val.imgSrcMobile },
                    `relative h-[40rem] bg-cover bg-center bg-no-repeat`,
                  )}
                >
                  <ImageLoader src={val.imgSrc} layout='fill' objectFit='cover' priority={true} />
                </div>
                {/* <ImageLoader src={val.src} alt={val.alt} layout='fill' /> */}
              </div>
              {/* Content */}
              <div className='absolute top-[20%] left-[5%] text-white md:top-[10%] lg:top-[10%] lg:left-[15%]'>
                <div className='mb-4'>
                  <p className='font-poppins text-[3rem] font-semibold drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-[5rem] 2xl:text-[5.8rem]'>
                    {val?.title}
                  </p>
                  <span
                    className={classNames(
                      `font-poppins  font-semibold text-3xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]`,
                      'md:text-[3rem]',
                      '2xl:text-6xl'
                    )}
                  >
                    {val?.subTitle}
                  </span>
                </div>
                <div>
                  <p className='font-prompts text-2xl font-medium drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-3xl 2xl:text-5xl'>
                    {val?.description}
                  </p>
                </div>
                <div
                  className={classNames(
                    'hidden relative',
                    'md:w-[5.75rem] md:h-[3.5rem] md:top-10 md:-right-24 xl:block xl:absolute',
                    '2xl:-right-36 2xl:w-[8.75rem] 2xl:h-[5.3rem] '
                  )}
                >
                  <ImageLoader layout='fill' src='/images/carousel/left-arrow-green.png' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
