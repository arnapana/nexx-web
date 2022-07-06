import React, { useState } from 'react'
import { Button, ImageLoader, ModalOpacity } from '@components/common'
import * as _ from 'lodash'

interface ICardHighLight {
  src: string
  alt: string
  title: string
  content: string
  width?: number
  height?: number
  description: string
}

export const CardHighLight: React.FC<ICardHighLight> = ({ src, alt, title, content, description, width, height }) => {
  const [isModal, setModal] = useState<boolean>(false)

  const handleModal = (event: any) => {
    event.stopPropagation()
    setModal((val) => !val)
  }

  return (
    <div className='my-8 md:mx-2 lg:p-5 lg:m-0 lg:my-10 2xl:my-20'>
      <div className='flex relative flex-col items-center py-10 px-6 w-[19rem] h-full bg-white rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)] md:h-[21.5rem] 2xl:w-[23rem] 2xl:h-[25.5rem]'>
        {/* Icon */}
        <div className='relative w-full max-w-[109px] h-[90px] max-h-[75px]'>
          {src ? <ImageLoader layout='fill' objectFit='contain' src={src} alt={alt} /> : <div className='w-[80px] h-[80px] bg-slate-300 animate-pulse'></div>}
        </div>
        {/* Header */}
        <div className='my-5'>
          <h4 className='font-prompts text-xl font-medium text-center 2xl:text-2xl'>{title}</h4>
        </div>
        {/* Content */}
        <div className='px-5'>
          <p className='font-prompts text-center line-clamp-5 md:text-base  md:line-clamp-4  2xl:text-lg 2xl:line-clamp-7'>{description}</p>
        </div>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
          <Button name='ดูเพิ่มเติม' onClick={(event: any) => handleModal(event)} innerClassName='w-[145px] md:w-[170px] 2xl:w-[190px]' />
        </div>
      </div>

      {/* Modal */}
      <ModalOpacity isModal={isModal} onClick={(event: any) => handleModal(event)}>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='relative p-8 min-w-[350px] max-w-[647px] max-h-[477px] bg-white rounded-[2rem] md:py-12 md:px-16'>
            <div className='mb-7'>
              <p className='font-prompts font-medium text-center h3'>{title}</p>
            </div>

            <div className='mb-5'>
              <p className='font-prompts tracking-wide text-center line-clamp-14 md:line-clamp-10 subtitle'>{content}</p>
            </div>
            {_.includes(_.lowerCase(title), 'max card') && (
              <div className='flex justify-center'>
                <ImageLoader width={100} height={100} src='/images/service/img5.png' />
              </div>
            )}
            <div className='absolute top-0 right-0 translate-x-5 -translate-y-5 cursor-pointer' onClick={(event: any) => handleModal(event)}>
              <ImageLoader width={60} height={60} src='/images/icons/cancel-modal.png' />
            </div>
          </div>
        </div>
      </ModalOpacity>
    </div>
  )
}
