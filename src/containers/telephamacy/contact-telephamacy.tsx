import React from 'react'
import { ColorLine, ImageLoader } from '@components/common'

export const ContactTelephamacyContainer = () => {
  return (
    <section className='py-24 bg-[#FCFCFC]'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='flex justify-center items-center'>
            <ImageLoader src='/images/telephamacy/img1.png' width={555} height={320} />
          </div>
          <div className='pr-[20%] pl-[10%]'>
            <p className='font-prompts font-medium h3'>ปรึกษาเภสัชกรหรือบุคคลากรทางการแพทย์ออนไลน์ตอนนี้</p>
            <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='w-28 my-10' />
            <div className=''>
              <button className='py-4 px-7 bg-[#06C755] rounded-full cursor-pointer'>
                <p className='font-prompts text-white'>เริ่มปรึกษาผ่าน LINE</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
