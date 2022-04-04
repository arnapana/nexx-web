import React from 'react'
import { CardHighLight } from '@components/index'

// Mock
import serviceHightlight from '@constants/mock/service-hightlight.json'
import { ColorLine } from '@components/common'

const SerivceHighlight = () => {
  return (
    <section className='py-14 md:py-16 2xl:py-[133px]'>
      <div className='container mx-auto'>
        {/* Content */}
        <div>
          <div className='my-5'>
            <p className='font-poppins text-center h2'>{serviceHightlight.title}</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />

          <div className='md:px-[25%]'>
            <p className='text-center'>{serviceHightlight.content}</p>
          </div>
        </div>
        {/* Card Highlight */}
        <div className='flex flex-wrap justify-center'>
          {serviceHightlight.cards.map((val, idx) => (
            <CardHighLight
              key={idx}
              src={val.image.img}
              alt={val.image.alt}
              title={val.name}
              content={val.detail}
              width={val.image.width}
              height={val.image.height}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SerivceHighlight
