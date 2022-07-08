import React, { useState, useRef } from 'react'
import * as _ from 'lodash'
import { CardTelephamacy } from '@components/index'
import { ColorLine, ImageLoader } from '@components/common'

import Slider from 'react-slick'
import { ITelephamacy } from 'pages/telepharmacy'
import { NextPage } from 'next'

interface Props {
  telephamacies: ITelephamacy[]
}

export const TelephamacyContainer: NextPage<Props> = ({ telephamacies }) => {
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
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div>
            {_.map(telephamacies, (val, idx) => (
              <CardTelephamacy
                key={idx}
                name={val.title}
                list={val.content}
                index={idx}
                current={slideIndex}
                onClick={() => handleSlick(idx)}
              />
            ))}
          </div>
          <div id='telephamacy' className='px-10 mx-auto md:px-0'>
            <div className='overflow-hidden relative w-[250px] md:w-[300px]'>
              <Slider {...settings} ref={slickRef}>
                {_.map(telephamacies, (val, idx) => (
                  <ImageLoader
                    key={idx}
                    src={val?.imgSrc ? val.imgSrc : '/images/telephamacy/img2.png'}
                    width={300}
                    height={600}
                    objectFit="contain"
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
