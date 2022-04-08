import React from 'react'
import { ImageLoader } from '@components/common'
export const ContactusContainer = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10'>
          <p className='font-prompts text-[3rem] font-medium text-center'>ติดต่อเรา</p>
        </div>
        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div></div>
          <div>
            <div className='overflow-hidden relative mb-5 max-w-[620px] max-h-[820px] bg-white rounded-tr-[3rem] rounded-bl-[3rem]'>
              <button className='flex absolute top-5 left-6 flex-row justify-center items-center p-2 rounded-lg bg-secondary'>
                <ImageLoader width={18} height={18} src='/images/icons/right-arrow.png' />
                <span className='ml-2 font-poppins text-sm font-semibold text-white'>Get Direction</span>
              </button>
              <iframe
                className='-mt-10 w-full h-[820px] border-0'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.413107201355!2d100.90005111528926!3d12.945396690873062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3446075ca93b38f!2zMTLCsDU2JzQzLjQiTiAxMDDCsDU0JzA4LjEiRQ!5e0!3m2!1sth!2sth!4v1648752408749!5m2!1sth!2sth'
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
