import React from 'react'
import { Button, ImageLoader } from '@components/common'

interface ICardHighLight {
  src: string
  alt: string
  title: string
  content: string
  width: number
  height: number
}

export const CardHighLight: React.FC<ICardHighLight> = ({ src, alt, title, content, width, height }) => {
  return (
    <div className='mx-6 my-20'>
      <div className='relative flex flex-col items-center w-[25rem] h-[27.5rem] drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)] bg-white rounded-3xl px-9 py-10'>
        {/* Icon */}
        <div>
          <ImageLoader width={width} height={height} src={src} alt={alt} />
        </div>
        {/* Header */}
        <div className='my-5'>
          <h4 className='text-center font-poppins font-medium text-2xl'>{title}</h4>
        </div>
        {/* Content */}
        <div className='px-5'>
          <p className='text-center font-prompts font-medium text-xl'>{content}</p>
        </div>
        <div className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2'>
          <Button name='ดูเพิ่มเติม' />
        </div>
      </div>
    </div>
  )
}
