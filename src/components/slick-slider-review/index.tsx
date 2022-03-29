import React from 'react'
import { NextPage } from 'next'
import Slider from 'react-slick'

const datas = [1, 2, 3, 4, 5]

export const SlickSliderReview: NextPage = () => {
  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    appendDots: (dots: any) => (
      <div className=''>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    )
  }
  return (
    <div className='slider-review overflow-hidden min-h-[500px]'>
      <Slider {...settings}>
        {datas.map((val, idx) => (
          <div key={idx} className='slider-content z-50 text-center w-full h-[300px] px-10'>
            <div className='bg-red-300 w-full h-full'>
              <h3 className='text-blue-500'>{val}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
