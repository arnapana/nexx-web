import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'
import { Button } from '@components/common'
import { CardReview } from '@components/index'
import { IReview } from 'pages'
import { NextPage } from 'next'

interface Props {
  reviews: IReview[]
}

export const CustomerReviewContainer: NextPage<Props> = ({ reviews }) => {
  const skip = 8
  const [offset, setOffset] = useState<number>(8)
  const [reviewsState, setreviewsState] = useState<IReview[]>(reviews)

  const handleLoadMore = () => {
    const curOffset = offset + skip
    setOffset(curOffset)
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API as string}/reviews?${new URLSearchParams({
        range: JSON.stringify([0, curOffset]),
        sort: JSON.stringify(['id', 'ASC']),
        filter: JSON.stringify({ status: true })
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        setreviewsState(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <section className='mb-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 grid-flow-row mb-24 md:grid-cols-3'>
          {_.map(reviewsState, (val, idx) => (
            <CardReview key={idx} review={val} />
          ))}
        </div>
        <div>
          <Button innerClassName='mx-auto' name='ดูเพิ่มเติ่ม' onClick={handleLoadMore} />
        </div>
      </div>
    </section>
  )
}
