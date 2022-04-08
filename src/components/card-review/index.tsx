import React from 'react'
import { ImageLoader } from '@components/common'

export const CardReview = () => {
  return (
    <div className='p-5'>
      <div className='px-12 pt-16 pb-10 bg-white rounded-[3rem] drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]'>
        {/* Content */}
        <div className='mb-10'>
          <p className='font-prompts font-medium text-center'>
            บูติกเด้อโปรโมท เตี๊ยมคอนโทรลออร์แกนิกกราวนด์คอร์ส คาแร็คเตอร์ คอรัปชันรูบิก
            มอบตัวเดชานุภาพมือถือท็อปบู๊ทโดมิโน เนิร์สเซอรีปาร์ตี้ครัวซองแชมเปี้ยนคอลัมนิสต์ ปูอัดสปอร์ตโอเลี้ยงมอนส
          </p>
        </div>
        {/* Card */}
        <div className='flex justify-start items-center space-x-8'>
          <div>
            <ImageLoader width={72} height={72} src='images/review/img2.png' />
          </div>
          <div>
            <div className='mb-2'>
              <p className='font-prompts text-xl font-normal'>ชื่อ นามกสุล</p>
            </div>
            <div>
              <p className='font-prompts text-xl font-normal text-[#5D5D5D]'>อาชีพ พนักงานออฟฟิต</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
