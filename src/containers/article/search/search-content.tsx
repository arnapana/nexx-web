import React from 'react'
import { CardArticle } from '@components/index'
import { Button } from '@components/common'

export const SearchContentContainer = () => {
  return (
    <section className='mb-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-16 mb-20 md:grid-cols-2'>
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </div>

        <Button innerClassName='mx-auto' name='ดูเพิ่มเติ่ม' />
      </div>
    </section>
  )
}
