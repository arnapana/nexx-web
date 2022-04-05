import React, { useState } from 'react'
import classNames from 'classnames'
import { ImageLoader } from '@components/common'

export const ButtonContact = () => {
  const [isOpen, setOpen] = useState<boolean>(true)

  const handleOpen = () => {
    setOpen((val) => !val)
  }

  if (!isOpen) return <></>

  return (
    <div className='fixed top-[80%] right-[5%] z-20 md:right-28'>
      <button className='flex relative justify-center items-center px-10 w-[15rem] h-16 rounded-full md:w-[17.5rem] md:h-24 bg-secondary'>
        <div className='absolute bottom-0 left-0'>
          <div className='relative  w-[6rem] h-[5rem] md:w-[118px] md:h-[113px]'>
            <ImageLoader layout='fill' src='/images/icons/button-contact.png' />
          </div>
        </div>

        <div className='relative ml-14 w-32 h-12 md:ml-auto'>
          <div className='flex items-center pl-2 w-full h-full'>
            <p className='font-prompts font-medium text-left text-primary md:text-xl'>เริ่มต้นปรึกษา เภสัชกร</p>
          </div>
          {/* Icon Right */}
          <div
            className={classNames(
              'absolute w-6 h-3 right-2 bottom-1',
              'md:w-[36px] md:h-[17px] md:right-2 md:bottom-0'
            )}
          >
            <ImageLoader layout='fill' src='/images/icons/enter-white-button.png' />
          </div>
        </div>
        {/* Close Icon */}
        <div className='absolute -top-4 right-2 w-8 h-8' onClick={handleOpen}>
          <ImageLoader layout='fill' src='/images/icons/cancel-modal.png' />
        </div>
      </button>
    </div>
  )
}
