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
      <a href='https://line.me/R/ti/p/@403viphs' target='_blank' rel='noreferrer'>
        <button className={classNames('flex relative justify-center items-center px-9 w-[15rem] h-16 rounded-full bg-secondary', 'md:h-[70px] ')}>
          <div className='absolute bottom-0 left-0'>
            <div className={classNames('relative  w-[6rem] h-[5rem]', 'md:w-[110px] md:h-[100px]')}>
              <ImageLoader layout='fill' src='/images/icons/button-contact.png' />
            </div>
          </div>

          <div className='relative ml-14 w-32 h-12 md:ml-16'>
            <div className='flex items-center pl-2 w-full h-full'>
              <p className='font-prompts font-medium text-left text-primary md:text-base'>เริ่มต้นปรึกษา เภสัชกร</p>
            </div>
            {/* Icon Right */}
            <div className={classNames('absolute w-6 h-3 right-4 bottom-1', 'md:w-[28px] md:h-[14px] md:right-2 md:bottom-1')}>
              <ImageLoader layout='fill' src='/images/icons/enter-white-button.png' />
            </div>
          </div>
        </button>
      </a>
      {/* Close Icon */}
      <div className='absolute -top-4 right-2 w-8 h-8 cursor-pointer' onClick={handleOpen}>
        <ImageLoader layout='fill' src='/images/icons/cancel-modal.png' />
      </div>
    </div>
  )
}
