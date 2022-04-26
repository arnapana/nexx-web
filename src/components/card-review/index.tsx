import React from 'react'
import { ImageLoader } from '@components/common'

export const CardReview = () => {
  return (
    <div className='p-5'>
      <div className='px-8 pt-14 pb-10 bg-white rounded-[3rem] drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]'>
        {/* Content */}
        <div className='mb-10'>
          <p className='font-prompts text-sm font-medium text-center line-clamp-6 md:text-lg 2xl:text-xl'>
            บูติกเด้อโปรโมท เตี๊ยมคอนโทรลออร์แกนิกกราวนด์คอร์ส คาแร็คเตอร์ คอรัปชันรูบิก
            มอบตัวเดชานุภาพมือถือท็อปบู๊ทโดมิโน เนิร์สเซอรีปาร์ตี้ครัวซองแชมเปี้ยนคอลัมนิสต์ ปูอัดสปอร์ตโอเลี้ยงมอนส
          </p>
        </div>
        {/* Card */}
        <div className='flex justify-start items-center space-x-5 md:space-x-8'>
          <div>
            <ImageLoader width={72} height={72} src='images/review/img2.png' />
          </div>
          <div>
            <div className='mb-2'>
              <p className='font-prompts text-sm font-normal line-clamp-1 md:text-base 2xl:text-xl'>ชื่อ นามกสุล</p>
            </div>
            <div>
              <p className='font-prompts text-sm font-normal text-[#5D5D5D] line-clamp-2 md:text-base 2xl:text-lg'>อาชีพ พนักงานออฟฟิต</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
