import React from 'react'

import { ColorLine } from '@components/common'
import { NextPage } from 'next'

interface Props {
  title: string
  description: string
}

export const OurServiceContainer: NextPage<Props> = ({ title, description }) => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='mb-20'>
          <div>
            <p className='text-center h2'>{title ? title : "บริการของเรา"}</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
          <div className='text-center md:px-[28%]'>
            <p>{description ? description : "NEXX Pharma เรามีบริการครอบคลุมทุกเรื่องยาและสุขภาพ แบบครบวงจรจากเภสัชกรและผู้เชี่ยวชาญในสาขาต่างๆ"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
