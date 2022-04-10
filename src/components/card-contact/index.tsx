import React from 'react'

import { ImageLoader } from '@components/common'

interface Props {
  name: string
  detail: string
  img: {
    src: string
    w: number | 0
    h: number | 0
  }
}

export const CardContact: React.FC<Props> = ({ name, detail, img }) => {
  return (
    <div className='px-8'>
      <div className='flex justify-center items-start'>
        <div className='flex justify-end w-2/5'>
          <div>
            <ImageLoader width={img?.w} height={img?.h} src={img?.src} />
          </div>
        </div>
        <div className='pl-8'>
          <div>
            <p className='font-prompts text-2xl font-medium'>{name}</p>
          </div>
          <div className=''>
            <p className='font-sarabun font-light text-[#5D5D5D]'>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
