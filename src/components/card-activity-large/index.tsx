import React from 'react'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'

export const CardActivityLarge = () => {
  return (
    <div>
      <div className=''>
        <div className='overflow-hidden relative max-h-[548px] rounded-[30px]'>
          <div className='flex absolute top-[8%] left-[5%] z-10 space-x-5'>
            <ButtonTag name='highlight' />
            <ButtonTag name='ความเครียด' />
          </div>
          <ImageLoader
            className='overflow-hidden rounded-[30px]'
            width={848}
            height={548}
            src='/images/aboutus/card-review-large.png'
          />
          <div className='absolute bottom-0 left-0 py-5 px-9 w-full h-[200px] bg-primary'>
            <div className='mb-2'>
              <p className='font-prompts font-medium text-white h3'>
                Computer Vision Syndrome (CVS) : โรคใกล้ตัวของคนทำงานยุคใหม่ เพราะจ้องหน้าจอมากเกินไป
              </p>
            </div>
            <div>
              <p className='font-sarabun font-normal text-white line-clamp-2'>
                เพราะวิถีชีวิตของคนทำงานยุคปัจจุบันต้องทำงานผ่านเครื่องมือเทคโนโลยีมากขึ้น ไม่ว่าจะเป็นหน้าจอคอมพิว-
                เตอร์ จอสมาร์ทโฟน หรือแท็บเลต และเราก็ใช้เวลากับหน้าจอเหล่านี้เฉลี่ยวันละ
              </p>
            </div>
            <div className='flex justify-end items-center space-x-3'>
              <p className='font-prompts text-base text-white underline'>อ่านเพิ่มเติ่ม</p>
              <div>
                <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
