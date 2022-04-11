import React from 'react'

import storeConstant from '@constants/mock/store-page.json'
import { ColorLine, ImageLoader } from '@components/common'

export const HeaderContentContainer = () => {
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-14'>
          <div>
            <p className='text-center h2'>{storeConstant.title}</p>
          </div>

          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>
        {/* Content */}
        <div className='flex justify-center space-x-20'>
          {storeConstant['store-cards'].map((val, idx) => (
            <div key={idx}>
              <div className='box-border flex flex-col items-center py-12 px-6 w-[222px] h-[236px] bg-white rounded-[2rem] drop-shadow-[0_5px_30px_rgba(57,74,217,0.1)]'>
                <div>
                  <ImageLoader width={val.img.w} height={val.img.h} src={val.img.src} />
                </div>
                <div>
                  <p className='font-prompts font-normal text-center h3'>{val.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
