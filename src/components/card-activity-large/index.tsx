import React from 'react'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import Link from 'next/link'

export const CardActivityLarge = () => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <div className='overflow-hidden relative max-w-[868px] max-h-[548px] rounded-[30px]'>
          <div className='flex absolute top-[8%] left-[5%] z-10 space-x-5'>
            <ButtonTag name='highlight' />
            <ButtonTag name='ความเครียด' />
          </div>
          <ImageLoader
            className='overflow-hidden rounded-[30px]'
            width={868}
            height={568}
            src='/images/aboutus/card-review-large.png'
          />
          <div className='absolute bottom-0 left-0 p-2  h-[84px] bg-primary md:py-5 md:px-9 md:h-[200px]'>
            <div className='md:mb-2'>
              <p className='font-kanits font-medium text-white line-clamp-2 h3'>
                Computer Vision Syndrome (CVS) : โรคใกล้ตัวของคนทำงานยุคใหม่ เพราะจ้องหน้าจอมากเกินไป
              </p>
            </div>
            <div className='hidden mb-3 md:block'>
              <p className='font-sarabun text-sm font-normal leading-7 text-white line-clamp-2 2xl:text-base'>
                เพราะวิถีชีวิตของคนทำงานยุคปัจจุบันต้องทำงานผ่านเครื่องมือเทคโนโลยีมากขึ้น ไม่ว่าจะเป็นหน้าจอคอมพิว-
                เตอร์ จอสมาร์ทโฟน หรือแท็บเลต และเราก็ใช้เวลากับหน้าจอเหล่านี้เฉลี่ยวันละ
              </p>
            </div>
            <div className='flex justify-end items-center mr-2 space-x-3 md:mr-0'>
              <p className='font-prompts text-sm text-white underline md:text-base'>
                <Link href='/article/cvs'>
                  <a>อ่านเพิ่มเติ่ม</a>
                </Link>
              </p>
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
