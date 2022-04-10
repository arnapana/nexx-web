import React from 'react'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'

interface Props {
  containerClassName: string
  innerClassName: string
}

export const CardArticle: React.FC<Props> = ({ containerClassName, innerClassName }) => {
  return (
    <div className={classNames(containerClassName)}>
      <div className={classNames(innerClassName, 'flex h-[185px]')}>
        <div className='w-2/3'>
          <ImageLoader className='rounded-3xl' width={255} height={185} src='/images/article/img1.png' />
        </div>
        <div className='flex flex-col justify-between pl-5 w-full'>
          <div className='mb-2'>
            <p className='font-prompts text-xl font-medium line-clamp-2'>
              ร้านยาแมกซ์ฟาร์มาซี Rebranding ใหม่ เป็น NEXX Pharma พร้อมเดินหน้า
            </p>
          </div>
          <div className='mb-4'>
            <p className='font-sarabun text-base font-normal text-[#5D5D5D] line-clamp-3'>
              ร้านยาแมกซ์ฟาร์มาซี Rebranding แล้ว เป็น NEXX Pharma ปรับภาพลักษณ์ใหม่ให้ทันสมัย เข้าถึงลูกค้า
              ได้มากยิ่งขึ้น พร้อมเดินหน้าขยายสาขาที่ 2 ร้านยา...
            </p>
          </div>
          <div className='flex space-x-5'>
            <ButtonTag name='สุขภาพ' />
            <ButtonTag name='ความเครียด' />
          </div>
        </div>
      </div>
    </div>
  )
}
