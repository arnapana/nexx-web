import React from 'react'
import { ImageLoader } from '@components/common'

interface ICardVision {
  name: string
  content: string
  url?: string
  image: {
    src: string
    w: number
    h: number
  },
  onClick: (event:any) => void
}

export const CardVision: React.FC<ICardVision> = ({ name, content, onClick, image }) => {
  return (
    <div className='mx-auto'>
      <div className='relative px-6 pt-6 pb-9 w-[22rem] h-[17rem] bg-gradient-to-r from-[#364AD9] to-[#298DE3] rounded-2xl  md:w-[25rem]'>
        {/* Content */}
        <div className='flex flex-col justify-between w-[9rem] h-full 2xl:w-[10.5rem]'>
          <div className='mb-2'>
            <p className='font-poppins font-semibold text-white md:text-2xl 2xl:text-3xl'>{name}</p>
          </div>
          <div className='mb-auto'>
            <p className='font-kanits text-base text-white 2xl:text-lg'>{content}</p>
          </div>
          <div className='cursor-pointer'>
            <p className='inline-block font-prompts text-base text-white underline' onClick={(event:any)=>onClick(event)}>ดูเพิ่มเติม</p>
            {/* Image Arrow*/}
            <div className='inline-block ml-5'>
              <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
            </div>
          </div>

          {/* Image */}
          <div className='absolute -right-[2%] -bottom-[5%]'>
            <ImageLoader width={image.w} height={image.h} src={image.src} />
          </div>
        </div>
      </div>
    </div>
  )
}
