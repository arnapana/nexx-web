import React from 'react'
import { ImageLoader } from '@components/common'
interface ICardVision {}

export const CardVision: React.FC<ICardVision> = () => {
  return (
    <div className='overflow-hidden'>
      <div className='relative px-6 pt-6 pb-9 w-[25rem] h-[17rem] bg-gradient-to-r from-[#364AD9] to-[#298DE3] rounded-2xl'>
        {/* Content */}
        <div className='flex flex-col justify-between w-full h-full 2xl:w-[12.5rem] h-full'>
          <div className='mb-2'>
            <p className='font-poppins font-semibold text-white 2xl:text-3xl'>Convenient Medicine</p>
          </div>
          <div className='mb-auto'>
            <p className='font-kanits text-white 2xl:text-xl'>ปรึกษาเภสัชกรเรื่องยา และปัญหาสุขภาพจาก แพทย์เฉพาะทาง</p>
          </div>
          <div className=''>
            <p className='inline-block font-prompts text-base text-white underline'>ดูเพิ่มเติม</p>
            {/* Image Arrow*/}
            <div className='inline-block ml-5'>
              <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
            </div>
          </div>

          {/* Image */}
          <div className='absolute -right-[2%] -bottom-[5%]'>
            <ImageLoader
              width={240}
              height={230}
              src='/images/aboutus/smiling-charming-brunette-asian-woman-uses-mobile-phone-happy-texting-social-networks-addicted-modern-technologies-wears-casual-jumper.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
