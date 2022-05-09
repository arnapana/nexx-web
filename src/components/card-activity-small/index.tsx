import React from 'react'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'

export const CardActivitySmall = () => {
  return (
    <div className='mx-auto'>
      <div className='max-w-[25rem]'>
        <div className='flex flex-col mb-4 lg:flex-row'>
          <div
            className={classNames(
              'relative w-full h-[185px] md:mr-3 my-2 rounded-lg overflow-hidden',
              'md:w-[111px] md:h-[111px] md:rounded-full',
              ''
            )}
          >
            <ImageLoader layout='fill' src='/images/article/img1.png' />
          </div>
          <div className='lg:w-2/3'>
            <div className='md:mb-3'>
              <p className={classNames('font-kanits font-medium text-lg md:text-xl 2xl:text-2xl')}>
                ตรวจสุขภาพฟรี แค่มี Max Card ไปกับ “โครง การสถานีสุขภาพ”
              </p>
            </div>
            <div className='hidden space-x-5 md:flex'>
              <ButtonTag name='highligh' />
              <ButtonTag name='highligh' />
            </div>
          </div>
        </div>
        <div className='flex mb-3 space-x-5 md:hidden'>
          <ButtonTag name='highligh' />
          <ButtonTag name='highligh' />
        </div>
        <div className='mb-2'>
          <p className='font-sarabun text-sm text-[#5D5D5D] 2xl:text-base'>
            โครงการที่จัดขึ้นโดยร้านยาแมกซ์ฟาร์มาซี ก่อนจะเปลี่ยนชื่อใหม่ เป็น NEXX Pharma ร่วมมือกับโรงพยาบาลมิตรไมตรี
            เพื่อออก ตรวจสุขภาพให้กับพี่น้องใน 8 ชุมชน
          </p>
        </div>
        <div className='flex items-center space-x-3'>
          <p className='font-prompts text-sm font-medium text-primary md:text-base'>อ่านเพิ่มเติ่ม</p>
          <div className='grid place-items-center'>
            <ImageLoader width={24} height={12} src='/images/icons/enter-blue-button.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
