import React from 'react'
import Slider from 'react-slick'
import classNames from 'classnames'
import { ColorLine, ImageLoader } from '@components/common'

import reviewConstant from '@constants/mock/review.json'

export const CustomerReview = () => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    adaptiveHeight: true,
    variableWidth: true,
    appendDots: (dots: any) => (
      <div className=''>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    )
  }
  return (
    <section className='mb-16 2xl:mb-0'>
      {/* Header */}
      <div className='container mx-auto'>
        <div className='my-5'>
          <p className='text-center h2'>{reviewConstant.title}</p>
        </div>
        <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />

        <div className='mb-10 md:px-40'>
          <p className='text-center'>{reviewConstant.content}</p>
        </div>
      </div>
      {/* Slider */}
      <div
        id='App'
        className='overflow-hidden my-14 mx-auto w-full min-h-[550px] md:min-h-[610px] lg:min-h-[670px] 2xl:min-h-[800px]'
      >
        <Slider {...settings}>
          {reviewConstant.cards.map((val, idx) => (
            <div key={idx} className='p-10 slider-review'>
              <div className='p-5 bg-white rounded-3xl drop-shadow-[0_10px_15px_rgba(54,74,217,0.1)] md:p-10 lg:p-16 card-review'>
                <div className='box-border overflow-hidden w-full h-full text-ellipsis'>
                  <div className='flex flex-col justify-center items-center mb-5'>
                    <div className='overflow-hidden rounded-full'>
                      <ImageLoader width={123} height={123} src={val.img} />
                    </div>
                    <div className='mt-3'>
                      <p className='font-prompts text-base'>
                        <span>{val.name}</span> <span>{val.surename}</span>, <span>{val.age}</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <p
                      className={classNames(
                        'font-sarabun text-base font-light text-center line-clamp-7',
                        'md:text-lg md:line-clamp-5',
                        'lg:line-clamp-4',
                        '2xl:text-xl 2xl:line-clamp-none'
                      )}
                    >
                      {val.review}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
