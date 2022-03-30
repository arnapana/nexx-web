import React from 'react'
import Slider from 'react-slick'

import { CardReview } from '@components/index'

const datas = [1, 2, 3, 4, 5]

const CustomerReview = () => {
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
    <div className='my-20'>
      <Slider {...settings}>
        {datas.map((val, idx) => (
          <div key={idx} className='w-[40rem] h-[28rem]'>
            <CardReview />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CustomerReview
