import React from 'react'
import { Button } from '@components/common'
import { ImageLoader } from '@components/common'

const Introduction = () => {
  return (
    <div>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-28'>
          <h2 className='text-center font-prompts font-medium text-black text-[2.5rem]'>
            เพราะเราเชื่อว่าคุณภาพชีวิตที่ดี เริ่มต้นที่ <span className='text-secondary'>“สุขภาพ”</span>
          </h2>
        </div>
        {/* Intro 1 */}
        <div className='flex flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 mb-36'>
            {/* Image */}
            <div className='m-auto'>
              <ImageLoader src='/images/intro/intro1.png' width={555} height={320} />
            </div>
            {/* Content */}
            <div className='px-10'>
              {/* QuoteMessage */}
              <div className='mb-7'>
                <div className='relative'>
                  <ImageLoader src='/images/intro/quote.png' width={544} height={71} />
                  <div className='absolute left-6 top-3'>
                    <p className='font-prompts font-medium text-2xl text-white'>
                      “มีคุณภาพชีวิตที่ดีได้ โดยไม่จำเป็นต้องจ่ายแพง”{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-5'>
                <p className='font-prompts text-2xl'>
                  <span className='font-medium text-primary'>NEXX Pharma</span> อยากให้ทุกคนเข้าถึง สุขภาพที่ดีได้
                  อย่างทั่วถึงไม่ว่าจะอยู่ที่ไหน ก็สามารถเข้าถึงการดูแล ที่ดีได้ผ่านช่องทางออนไลน์ของเรา อาทิ
                </p>
              </div>
              <div className='intro-list'>
                <ul className='font-prompts text-2xl'>
                  <li>แชทปรึกษาปัญหาสุขภาพเบื้องต้นผ่านไลน์</li>
                  <li>ซื้อยา สินค้าสุขภาพ ราคาดี พร้อมส่งตรงถึงบ้าน</li>
                  <li>วิดีโอคอลกับเภสัชกรหรือบุคลากรทางการแพทย์ ตลอดจนได้รับยาที่ตอบโจทย์ตรงจุด</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Intro 2 */}
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Contents */}
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
            {/* Images */}
            <div className='m-auto'>
              <ImageLoader src='/images/intro/intro2.png' width={254} height={533} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ul {
          position: relative;
          padding-left: 20px;
          list-style: none;
        }
        li {
          padding-left: 20px;
          margin-bottom: 5px;
        }
        .intro-list ul li:before {
          // list-style-image: url('images/icons/enter-green-button.png');
          position: absolute;
          left: 0px;
          content: url('images/icons/enter-green-button.png');
        }
      `}</style>
    </div>
  )
}

export default Introduction
