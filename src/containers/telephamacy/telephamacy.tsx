import React, { useState, useRef } from 'react'
import { CardTelephamacy } from '@components/index'
import { ColorLine, ImageLoader } from '@components/common'

import telephamacyConstant from '@constants/mock/telephamacy.json'
import Slider from 'react-slick'

export const TelephamacyContainer = () => {
  const slickRef = useRef<any>()
  const [slideIndex, setSlideIndex] = useState<number>(0)

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
    ),
    beforeChange: (current: number, next: number) => setSlideIndex(next)
  }

  const handleSlick = (i: number) => {
    slickRef.current.slickGoTo(i)
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-20'>
          <div>
            <p className='text-center h2'>ขั้นตอนในการใช้บริการ Telepharmacy</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
          <div className='px-[10%] text-center md:px-[30%]'>
            <p>ตอบทุกคําถามเรื่องยาและสุขภาพโดยเภสัชกรหรือ บุคลากรทางการแพทย์ในรูปแบบออนไลน์</p>
          </div>
        </div>
        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            {telephamacyConstant.map((val, idx) => (
              <CardTelephamacy key={idx} name={val.name} list={val.list} index={idx} current={slideIndex} onClick={() => handleSlick(idx)} />
            ))}
          </div>
          <div id='telephamacy' className='px-10 mx-auto md:px-0'>
            <div className='overflow-hidden relative w-[250px] h-[900px] md:w-[350px] xl:w-[396px]'>
              <Slider {...settings} ref={slickRef}>
                <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />

                <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />

                <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />

                <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />

                <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />

                <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
