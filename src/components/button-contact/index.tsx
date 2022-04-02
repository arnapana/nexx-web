import React from 'react'
import { ImageLoader } from '@components/common'

export const ButtonContact = () => {
  return (
    <div className='fixed top-[88%] right-[5%] md:right-28 z-[30]'>
      <button className='relative w-[17.5rem] h-11 md:h-24 px-10 rounded-full bg-secondary flex items-center justify-center'>
        <div className='absolute left-0 bottom-0'>
          <div className='relative  h-[5rem] w-[6rem] md:w-[118px] md:h-[113px]'>
            <ImageLoader layout='fill' src='/images/icons/button-contact.png' />
          </div>
        </div>

        <div className='relative ml-auto w-40 md:w-32 h-12'>
          <div className='w-full h-full pl-2 flex items-center'>
            <p className='text-left font-prompts font-medium text-primary md:text-xl'>เริ่มต้นปรึกษา เภสัชกร</p>
          </div>
          {/* Icon Right */}
          <div className='absolute w-6 h-3 md:w-[36px] md:h-[17px] -right-7 bottom-[17.5px] md:right-2 md:-bottom-2'>
            <ImageLoader layout='fill' src='/images/icons/enter-white-button.png' />
          </div>
        </div>
      </button>
    </div>
  )
}
