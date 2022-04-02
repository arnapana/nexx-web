import React from 'react'
import Slider from 'react-slick'
import { ColorLine, ImageLoader } from '@components/common'

const datas = [1, 2, 3, 4, 5]

const CustomerReview = () => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    adaptiveHeight: true,
    variableWidth: true,
    appendDots: (dots: any) => (
      <div className=''>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    )
  }
  return (
    <section className=''>
      {/* Header */}
      <div className='container mx-auto'>
        <div className='my-5'>
          <h2 className='text-center font-prompts font-medium text-3xl'>รีวิวจากลูกค้าของเรา</h2>
        </div>
        <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />

        <div className='md:px-40 mb-10'>
          <p className='text-center font-prompts text-xl'>
            ขอขอบคุณที่ไว้วางใจใช้บริการ NEXX Pharma เพราะข้อเสนอแนะของคุณมีค่า
            เราจะนำไปพัฒนาและให้บริการคุณอย่างดีที่สุด
          </p>
        </div>
      </div>
      {/* Slider */}
      <div id='App' className='min-h-[800px] w-full mx-auto my-15 overflow-hidden'>
        <Slider {...settings}>
          {datas.map((val, idx) => (
            <div key={idx} className='slider-review p-10'>
              <div className='card-review bg-white rounded-3xl drop-shadow-[0_10px_15px_rgba(54,74,217,0.1)] p-16'>
                <div className='flex flex-col justify-center items-center mb-5'>
                  <div className='rounded-full overflow-hidden'>
                    <ImageLoader width={123} height={123} src='/images/review/lifestyle-peopl.png' />
                  </div>
                  <div className='mt-3'>
                    <p className='font-prompts text-base'>Name Surename, 20</p>
                  </div>
                </div>
                <div>
                  <p className='text-center font-sarabun font-light text-xl'>
                    บูติกเด้อโปรโมท เตี๊ยมคอนโทรลออร์แกนิกกราวนด์คอร์ส คาแร็คเตอร์ คอรัปชันรูบิก
                    มอบตัวเดชานุภาพมือถือท็อปบู๊ทโดมิโน เนิร์สเซอรีปาร์ตี้ครัวซองแชมเปี้ยนคอลัมนิสต์
                    ปูอัดสปอร์ตโอเลี้ยงมอนสเตอร์เมจิค เยอบีร่าแทกติคแอปเปิ้ล ดีพาร์ตเมนท์ป๋อหลอ เดชานุภาพแคมเปญฟอยล์
                    เครปเยนไวอะกร้าเคอร์ฟิวอพาร์ตเมนต์ ไวอะกร้าไวอากร้า เซลส์แมน คอร์รัปชัน
                    ใช้งานวัจนะแคมป์ทัวริสต์ชัตเตอร์
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CustomerReview
