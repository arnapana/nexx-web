import React from 'react'
import { ImageLoader } from '@components/common'

export const ButtonContact = () => {
  return (
    <div className='fixed top-[49rem] right-28 z-[100]'>
      <button className='relative w-[17.5rem] h-24 px-10 rounded-full bg-secondary flex items-center justify-center'>
        <div className='absolute left-2 -bottom-1.5'>
          <ImageLoader width={118} height={113} src='/images/icons/button-contact.png' />
        </div>
        <div className='relative ml-auto w-32 h-12'>
          <div className='w-full pl-1'>
            <p className='text-left font-prompts font-medium text-primary text-xl'>เริ่มต้นปรึกษา เภสัชกร</p>
          </div>
          {/* Icon Right */}
          <div className='absolute right-2 -bottom-2'>
            <ImageLoader src='/images/icons/enter-white-button.png' width={36} height={17} />
          </div>
        </div>
      </button>
    </div>
  )
}
