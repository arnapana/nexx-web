import React from 'react'
import { ImageLoader } from '@components/common'

interface ICardVision {
  name: string
  content: string
  url?: string
  image: string
}

export const CardVision: React.FC<ICardVision> = ({ name, content, url, image }) => {
  return (
    <div className='overflow-hidden'>
      <div className='relative px-6 pt-6 pb-9 w-[25rem] h-[17rem] bg-gradient-to-r from-[#364AD9] to-[#298DE3] rounded-2xl'>
        {/* Content */}
        <div className='flex flex-col justify-between w-full h-full 2xl:w-[12.5rem]'>
          <div className='mb-2'>
            <p className='font-poppins font-semibold text-white 2xl:text-3xl'>{name}</p>
          </div>
          <div className='mb-auto'>
            <p className='font-kanits text-white 2xl:text-xl'>{content}</p>
          </div>
          <div className='cursor-pointer'>
            <p className='inline-block font-prompts text-base text-white underline'>ดูเพิ่มเติม</p>
            {/* Image Arrow*/}
            <div className='inline-block ml-5'>
              <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
            </div>
          </div>

          {/* Image */}
          <div className='absolute -right-[2%] -bottom-[5%]'>
            <ImageLoader width={240} height={230} src={image} />
          </div>
        </div>
      </div>
    </div>
  )
}
