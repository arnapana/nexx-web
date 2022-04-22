import React from 'react'
import { CardActivitySmall, CardActivityLarge } from '@components/index'

export const ArticleContainer = () => {
  return (
    <section className='mb-5 md:mb-12'>
      <div className='container mx-auto'>
        {/* Content */}
        <div className='grid grid-cols-1 md:gap-10 xl:grid-cols-3'>
          <div className='grid col-span-2 place-content-center mb-10 md:mb-0 xl:place-content-start'>
            <CardActivityLarge />
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1 '>
            <CardActivitySmall />
            <CardActivitySmall />
          </div>
        </div>
      </div>
    </section>
  )
}
