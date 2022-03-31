import React from 'react'
import Slider from 'react-slick'

const datas = [1, 2, 3, 4, 5]

const CustomSlider = (props: any) => {
  console.log(props)
  return (
    <div {...props}>
      <div className='card-review bg-red-300 rounded-xl drop-shadow-[0_10px_15px_rgba(54,74,217,0.1)]'>1</div>
    </div>
  )
}

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
    <section className='my-20'>
      {/* Header */}
      <div className='container mx-auto'>
        <div className='my-5'>
          <h2 className='text-center font-prompts font-medium text-3xl'>รีวิวจากลูกค้าของเรา</h2>
        </div>
        <div className='px-40 my-10'>
          <p className='text-center font-prompts text-xl'>
            ขอขอบคุณที่ไว้วางใจใช้บริการ NEXX Pharma เพราะข้อเสนอแนะของคุณมีค่า
            เราจะนำไปพัฒนาและให้บริการคุณอย่างดีที่สุด
          </p>
        </div>
      </div>
      {/* Slider */}
      <div id='App' className='w-full mx-auto my-20'>
        <Slider {...settings}>
          {datas.map((val, idx) => (
            <div key={idx} className='slider-review'>
              <CustomSlider />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CustomerReview
