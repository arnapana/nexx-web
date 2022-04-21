import React from 'react'
import { ColorLine } from '@components/common'
import { CardActivitySmall } from '@components/index'

export const ArticleRelativeContainer = () => {
  return (
    <section className='py-20 bg-[#FCFCFC]'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-20'>
          <div>
            <p className='font-medium text-center h2'>บทความที่เกี่ยวข้อง</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>

        {/* Content */}
        <div className='flex justify-start md:justify-center items-center space-x-10 overflow-x-auto'>
          <CardActivitySmall />
          <CardActivitySmall />
          <CardActivitySmall />
        </div>
      </div>
    </section>
  )
}
