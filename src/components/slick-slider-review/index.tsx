import React from 'react'
import { NextPage } from 'next'
import Slider from 'react-slick'

export const SlickSliderReview: NextPage = ({ children }) => {
  const settings = {
    className: 'center slider variable-width',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    variableWidth: true,
    appendDots: (dots: any) => (
      <div className=''>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    )
  }
  return <Slider {...settings}>{children}</Slider>
}
