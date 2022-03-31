import React from 'react'
import { CardHighLight } from '@components/index'

// Mock
import serviceHightlight from '@constants/mock/service-hightlight.json'
import { ColorLine } from '@components/common'

const SerivceHighlight = () => {
  return (
    <div className='py-28'>
      <div className='container mx-auto'>
        {/* Content */}
        <div>
          <div className='my-5'>
            <h2 className='text-center font-poppins font-medium text-3xl'>Service Highlight</h2>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />

          <div className='px-[25%]'>
            <p className='font-prompts text-xl text-center'>
              สุขภาพดีที่ทุกคนเข้าถึงได้ ด้วยบริการจาก NEXX Pharma ครอบคลุมทุกเรื่องยา
              และสุขภาพแบบครบวงจรจากเภสัชกรและแพทย์ผู้เชี่ยวชาญในสาขาต่างๆ
            </p>
          </div>
        </div>
        {/* Card Highlight */}
        <div className='flex flex-wrap justify-center'>
          {serviceHightlight.map((val, idx) => (
            <CardHighLight key={idx} src={val.image.img} alt={val.image.alt} title={val.name} content={val.detail} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SerivceHighlight
