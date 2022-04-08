import React from 'react'
import { ColorLine } from '@components/common'
import { CardOurService } from '@components/card-ourservice'

export const OurServiceContainer = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='mb-20'>
          <div>
            <p className='text-center h2'>บริการของเรา</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
          <div className='px-[30%] text-center'>
            <p>NEXX Pharma เรามีบริการครอบคลุมทุกเรื่องยาและสุขภาพ แบบครบวงจรจากเภสัชกรและผู้เชี่ยวชาญในสาขาต่างๆ</p>
          </div>
        </div>

        <div>
          <CardOurService />
        </div>
      </div>
    </section>
  )
}
