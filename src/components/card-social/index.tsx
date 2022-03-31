import React from 'react'
import { ImageLoader } from '@components/common'
interface ICardSocial {
  img: string
  alt: string
  link: string
  width: number
  height: number
}

export const CardSocial: React.FC<ICardSocial> = ({ img, alt, link, width, height }) => {
  return (
    <div className='w-11 h-11 bg-white shadow-md rounded-md'>
      <a className='w-full h-full flex items-center justify-center' href={link}>
        <ImageLoader layout='fixed' width={width} height={height} src={img} alt={alt} />
      </a>
    </div>
  )
}
