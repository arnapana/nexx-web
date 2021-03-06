import { ImageLoader } from '@components/common'
import React from 'react'

interface Props {
  name: string
  width: number
  height: number
  src: string
  idLink?: string
}

export const CardStore: React.FC<Props> = ({ name, width, height, src,idLink }) => {
  return (
    <a href={idLink} className='cursor-pointer'>
      <div className='box-border flex flex-col shrink-0 items-center py-8 px-6 mx-5 w-[222px] h-[216px] bg-white rounded-[2rem] drop-shadow-[0_5px_10px_rgba(57,74,217,0.1)]'>
        <div className='mb-3'>
          <ImageLoader width={width} height={height} src={src} objectFit="contain"/>
        </div>
        <div>
          <p className='font-prompts font-normal text-center h3'>{name}</p>
        </div>
      </div>
    </a>
  )
}
