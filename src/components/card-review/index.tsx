import React from 'react'
import { ImageLoader } from '@components/common'
import { IReview } from 'pages'
import { NextPage } from 'next'

interface Props {
  review: IReview
}

export const CardReview: NextPage<Props> = ({ review }) => {
  return (
    <div className='p-5 h-full'>
      <div className='flex flex-col justify-between py-10  px-8 h-full bg-white rounded-[3rem] drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]'>
        {/* Content */}
        <div className='mb-10'>
          <p className='font-prompts text-sm font-medium text-center line-clamp-5 md:text-lg 2xl:text-xl'>
            {review?.content}
          </p>
        </div>
        {/* Card */}
        <div className='flex justify-start items-center space-x-5 md:space-x-8'>
          <div className=''>
            <ImageLoader
              className='rounded-full'
              width={72}
              height={72}
              src={review?.imgSrc ? review.imgSrc : 'images/review/img2.png'}
            />
          </div>
          <div className='w-2/3'>
            <div className='mb-2'>
              <p className='font-prompts text-sm font-normal line-clamp-1 md:text-base 2xl:text-xl'>
                {review.firstname} {review?.lastname}
              </p>
            </div>
            <div>
              <p className='font-prompts text-sm font-normal text-[#5D5D5D] line-clamp-2 md:text-base 2xl:text-lg'>
                {review?.jobName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
