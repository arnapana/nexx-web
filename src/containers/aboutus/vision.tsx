import React from 'react'
import { CardVision } from '@components/index'
import { ColorLine } from '@components/common'

import aboutuConstant from '@constants/mock/aboutus.json'

export const VisionContainer = () => {
  return (
    <section className='mb-32'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-12'>
          <div>
            <p className='text-center h2'>{aboutuConstant.vision.name}</p>
          </div>

          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
          <div>
            <p className='text-center'>{aboutuConstant.vision.detail}</p>
          </div>
        </div>

        {/* Vision Cards */}
        <div className='grid gap-10 md:grid-cols-3'>
          {aboutuConstant.vision.cards.map((val, idx) => (
            <CardVision name={val.name} content={val.content} image={val.img} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
