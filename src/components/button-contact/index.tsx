import React from 'react'
import { ImageLoader } from '@components/common'

export const ButtonContact = () => {
  return (
    <div>
      <button className='relative w-[17.5rem] h-24 rounded-full bg-secondary flex items-center justify-center'>
        <div>asdasd</div>
        <div className='relative w-28 h-12'>
          <ImageLoader layout='fill' src='/images/carousel/Group 566.png' />
        </div>
      </button>
    </div>
  )
}
