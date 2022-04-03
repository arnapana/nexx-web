import React from 'react'
import Slider from 'react-slick'
import { ColorLine, ImageLoader } from '@components/common'

import reviewConstant from '@constants/mock/review.json'

const datas = [1, 2, 3, 4, 5]

const CustomerReview = () => {
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
    <section className=''>
      {/* Header */}
      <div className='container mx-auto'>
        <div className='my-5'>
          <p className='h2 text-center'>{reviewConstant.title}</p>
        </div>
        <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />

        <div className='md:px-40 mb-10'>
          <p className='text-center'>{reviewConstant.content}</p>
        </div>
      </div>
      {/* Slider */}
      <div id='App' className='min-h-[600px] lg:min-h-[800px] w-full mx-auto my-15 overflow-hidden'>
        <Slider {...settings}>
          {reviewConstant.cards.map((val, idx) => (
            <div key={idx} className='slider-review p-5'>
              <div className='card-review bg-white rounded-3xl drop-shadow-[0_10px_15px_rgba(54,74,217,0.1)] p-5 md:p-10 lg:p-16'>
                <div className='text-ellipsis overflow-hidden w-full h-full box-border'>
                  <div className='flex flex-col justify-center items-center mb-5'>
                    <div className='rounded-full overflow-hidden'>
                      <ImageLoader width={123} height={123} src={val.img} />
                    </div>
                    <div className='mt-3'>
                      <p className='font-prompts text-base'>
                        <span>{val.name}</span> <span>{val.surename}</span>, <span>{val.age}</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <p className='text-center font-sarabun font-light line-clamp-7 text-base md:line-clamp-5 lg:line-clamp-4 xl:line-clamp-none xl:text-xl'>
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

export default CustomerReview
