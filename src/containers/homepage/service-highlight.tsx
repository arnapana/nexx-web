import React from 'react'
import * as _ from 'lodash'
import { CardHighLight } from '@components/index'

// Mock
import serviceHightlight from '@constants/mock/service-hightlight.json'
import { ColorLine } from '@components/common'
import { IHightlight } from 'pages'
import { NextPage } from 'next'

interface Props {
  hightlightPost: IHightlight[]
}

export const SerivceHighlight: NextPage<Props> = ({ hightlightPost }) => {
  return (
    <section className='py-14 md:py-16 2xl:py-[100px]'>
      <div className='container mx-auto'>
        {/* Content */}
        <div>
          <div className='my-5'>
            <p className='font-poppins text-center uppercase h2'>{serviceHightlight.title}</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />

          <div className='md:px-[20%] 2xl:px-[25%]'>
            <p className='text-center'>{serviceHightlight.content}</p>
          </div>
        </div>
        {/* Card Highlight */}
        <div className='flex flex-wrap justify-center'>
          {_.map(hightlightPost, (val, idx) => (
            <CardHighLight
              key={idx}
              src={val.imgSrc}
              alt={val.title}
              title={val.title}
              content={val.content}
              description={val.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
