import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'

interface Props {
  containerClassName?: string
  innerClassName?: string
}

export const CardArticle: React.FC<Props> = ({ containerClassName, innerClassName }) => {
  return (
    <div className={classNames(containerClassName,"my-5")}>
      <Link href='/article/cvs'>
        <a title=''>
          <div className={classNames(innerClassName, 'flex flex-col md:flex-row md:h-[185px]')}>
            {/* Image */}
            <div className='px-5 mb-3'>
              <div className='relative mx-auto w-full h-[165px] md:w-[205px] 2xl:w-[255px] 2xl:h-[185px]'>
                <ImageLoader className='rounded-xl' layout='fill' src='/images/article/img1.png' />
              </div>
            </div>
            {/* Content */}
            <div className='flex flex-col px-5 w-full md:pl-1'>
              <div className='mb-2'>
                <p className='font-prompts font-medium line-clamp-2 md:text-base 2xl:text-xl'>
                  ร้านยาแมกซ์ฟาร์มาซี Rebranding ใหม่ เป็น NEXX Pharma พร้อมเดินหน้า
                </p>
              </div>
              <div className='mb-4'>
                <p className='font-sarabun text-sm font-normal text-[#5D5D5D] line-clamp-3 '>
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
        </a>
      </Link>
    </div>
  )
}
