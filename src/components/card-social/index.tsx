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
    <div className='w-10 h-10 bg-white rounded-md shadow-md 2xl:w-11 2xl:h-11'>
      <a className='flex justify-center items-center w-full h-full' href={link}>
        <ImageLoader width={width} height={height} src={img} alt={alt} />
      </a>
    </div>
  )
}
