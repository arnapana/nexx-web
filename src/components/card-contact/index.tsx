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
    <div className='flex justify-start md:justify-center'>
      <div className='flex w-fit'>
        <div className='w-[60px]'>
          <div className='grid relative place-content-center p-2 md:p-1' style={{ width: img.w, height: img.h }}>
            <ImageLoader width={img.w} height={img.h} src={img?.src} />
          </div>
        </div>
        <div className='pl-5 w-full md:pl-10'>
          <div className='mb-2'>
            <p className='font-kanits font-medium md:text-xl 2xl:text-2xl'>{name}</p>
          </div>
          <div className=''>
            <p className='font-sarabun text-sm font-light text-[#5D5D5D] md:text-lg 2xl:text-xl'>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
