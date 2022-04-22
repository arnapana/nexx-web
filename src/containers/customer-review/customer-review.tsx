import React from 'react'
import { Button } from '@components/common'
import { CardReview } from '@components/index'

export const CustomerReviewContainer = () => {
  return (
    <section className='mb-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 grid-flow-row mb-24 md:grid-cols-3'>
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
        </div>
        <div>
          <Button innerClassName='mx-auto' name='ดูเพิ่มเติ่ม' />
        </div>
      </div>
    </section>
  )
}
