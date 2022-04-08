import React from 'react'

import { ColorLine, ImageLoader } from '@components/common'

export const TelephamacyContainer = () => {
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-32'>
          <div>
            <p className='text-center h2'>ขั้นตอนในการใช้บริการ Telepharmacy</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
          <div className='px-[30%] text-center'>
            <p>ตอบทุกคําถามเรื่องยาและสุขภาพโดยเภสัชกรหรือ บุคลากรทางการแพทย์ในรูปแบบออนไลน์</p>
          </div>
        </div>
        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div></div>
          <div className='m-auto'>
            <ImageLoader src='/images/telephamacy/img2.png' width={396} height={800} />
          </div>
        </div>
      </div>
    </section>
  )
}
