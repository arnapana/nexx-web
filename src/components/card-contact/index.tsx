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
    <div className='2xl:px-8'>
      <div className='flex justify-center items-start'>
        <div className='grid place-content-center w-2/12 md:w-2/5'>
          <div>
            <ImageLoader width={img?.w} height={img?.h} src={img?.src} />
          </div>
        </div>
        <div className='pl-8 w-full'>
          <div className='mb-2'>
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
