import React from 'react'
import storeConstant from '@constants/mock/store-page.json'
import { ColorLine } from '@components/common'
import { CardStore } from '@components/index'

export const HeaderContentContainer = () => {
  return (
    <section className='mb-5 md:mb-20'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-14'>
          <div>
            <p className='text-center h2'>{storeConstant.title}</p>
          </div>

          <ColorLine lineClassName='h-[5px] text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>
        {/* Content */}
        <div className='flex overflow-x-auto flex-nowrap items-stretch py-5 w-full md:justify-center md:space-x-20'>
          {storeConstant['store-cards'].map((val, idx) => (
           <CardStore key={idx} idLink={val.idLink} name={val.name} width={val.img.w} height={val.img.h} src={val.img.src}/>
          ))}
        </div>
      </div>
    </section>
  )
}
