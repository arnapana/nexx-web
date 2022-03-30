import React from 'react'
import { Button } from '@components/common'

const Introduction = () => {
  return (
    <div>
      <div className='container mx-auto'>
        {/* Header */}
        <div>
          <h2 className='text-center font-prompts font-medium text-black text-[2.5rem]'>
            เพราะเราเชื่อว่าคุณภาพชีวิตที่ดี เริ่มต้นที่ <span className='text-secondary'>“สุขภาพ”</span>
          </h2>
        </div>
        {/* Intro 1 */}
        <div className='flex flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 mb-36'>
            <div></div>
            <div></div>
          </div>
          {/* Intro 2 */}
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='px-16'>
              <div className='mb-10'>
                <h2 className='font-prompts font-medium text-3xl'>
                  ร้านยาเน็กซ์ฟาร์มา
                  เชื่อมสุขภาพดีให้ทุกคนด้วยบริการให้คําปรึกษาจากเภสัชกรและบุคลากรทางแพทย์ผู้เชี่ยวชาญ
                </h2>
              </div>
              <div className='mb-10'>
                <p className='font-prompts text-2xl'>
                  พร้อมให้บริการอย่างไร้รอยต่อด้วยเทคโนโลยี เพื่อดูแลสุขภาพ ยาและผลิตภัณฑ์ต่างๆ ในราคามาตรฐาน
                  ตอบโจทย์ความต้องการด้านสุขภาพแบบครบวงจร
                </p>
              </div>
              <div className='mb-10'>
                <p className='font-prompts text-2xl'>
                  <span className='text-primary'>Connecting the Next</span>{' '}
                  เรามุ่งเน้นที่จะพัฒนาและเชื่อมโยงการให้บริการด้านการดูแลสุขภาพ
                  ผ่านนวัตกรรมและเทคโนโลยีที่ทันสมัยอย่างต่อเนื่อง เพื่อให้การเข้าถึงสุขภาพที่ดีเป็นเรื่องง่าย และใครๆ
                  ก็เข้าถึงได้
                </p>
              </div>
              <div>
                <Button name='เกี่ยวกับเรา' />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
