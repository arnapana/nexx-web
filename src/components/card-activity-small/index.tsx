import React from 'react'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'

export const CardActivitySmall = () => {
  return (
    <div>
      <div className='max-w-[25rem]'>
        <div className='flex flex-row mb-4'>
          <div className='pr-5'>
            <ImageLoader width={111} height={111} src='/images/pt-card.png' />
          </div>
          <div className='w-2/3'>
            <div className='mb-3'>
              <p className='font-prompts font-medium h3'>ตรวจสุขภาพฟรี แค่มี Max Card ไปกับ “โครง การสถานีสุขภาพ” </p>
            </div>
            <div className='flex space-x-5'>
              <ButtonTag name='highligh' />
              <ButtonTag name='highligh' />
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <p className='font-sarabun text-base text-[#5D5D5D]'>
            โครงการที่จัดขึ้นโดยร้านยาแมกซ์ฟาร์มาซี ก่อนจะเปลี่ยนชื่อใหม่ เป็น NEXX Pharma ร่วมมือกับโรงพยาบาลมิตรไมตรี
            เพื่อออก ตรวจสุขภาพให้กับพี่น้องใน 8 ชุมชน
          </p>
        </div>
        <div className='flex items-center space-x-3'>
          <p className='font-prompts text-base font-medium text-primary'>อ่านเพิ่มเติ่ม</p>
          <div>
            <ImageLoader width={24} height={12} src='/images/icons/enter-blue-button.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
