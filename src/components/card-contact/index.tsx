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
  action?: string
}

export const CardContact: React.FC<Props> = ({ name, detail, img, action }) => {
  return (
    <div className='flex justify-start md:justify-center'>
      <div className='flex w-fit'>
        <div className='w-[60px] md:my-2'>
          <div className='grid relative place-content-center p-2 md:p-1' style={{ width: img.w, height: img.h }}>
            <a  href={action} target='_blank' rel='noreferrer'>
              <ImageLoader  width={img.w} height={img.h} src={img?.src} objectFit='contain' />
            </a>
          </div>
        </div>
        <div className='pl-5 w-full md:pl-10'>
          <div className='mb-2'>
            <p className='font-kanits font-medium md:text-xl 2xl:text-2xl'>{name}</p>
          </div>
          <a href={action} target='_blank' rel='noreferrer'>
            <p className='font-kanits text-sm font-light text-[#5D5D5D] md:text-lg 2xl:text-xl'>{detail}</p>
          </a>
        </div>
      </div>
    </div>
  )
}
