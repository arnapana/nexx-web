import React from 'react'
import { CardActivitySmall, CardActivityLarge } from '@components/index'

export const ArticleContainer = () => {
  return (
    <section className='mb-36'>
      <div className='container mx-auto'>
        {/* Content */}
        <div className='flex'>
          <div className='mr-10'>
            <CardActivityLarge />
          </div>
          <div className='space-y-6'>
            <CardActivitySmall />
            <CardActivitySmall />
          </div>
        </div>
      </div>
    </section>
  )
}
