import React, { useState } from 'react'
import * as _ from 'lodash'
import classNames from 'classnames'
import { CardVision } from '@components/index'
import { ColorLine, ModalOpacity, ImageLoader } from '@components/common'

import aboutuConstant from '@constants/mock/aboutus.json'
import { IVision } from 'pages/aboutus'
import { NextPage } from 'next'

interface Props {
  visionPost: IVision[]
}

export const VisionContainer: NextPage<Props> = ({ visionPost }) => {

  return (
    <section className='mb-14 md:mb-32'>
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
        <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'>
          {_.map(visionPost, (val, idx) => (
            <CardVision
              id={idx}
              name={val.title}
              content={val.content}
              description={val.description}
              image={val.imgSrc}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
