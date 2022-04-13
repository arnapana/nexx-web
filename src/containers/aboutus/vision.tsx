import React, { useState } from 'react'
import classNames from 'classnames'
import { CardVision } from '@components/index'
import { ColorLine, ModalOpacity, ImageLoader } from '@components/common'

import aboutuConstant from '@constants/mock/aboutus.json'

export const VisionContainer = () => {
  const [isModal, setModal] = useState<boolean>(false)

  const handleModal = (event: any) => {
    event.stopPropagation()
    setModal((val) => !val)
  }

  return (
    <section className='mb-32'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-12'>
          <div>
            <p className='text-center h2'>{aboutuConstant.vision.name}</p>
          </div>

          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
          <div>
            <p className='text-center'>{aboutuConstant.vision.detail}</p>
          </div>
        </div>

        {/* Vision Cards */}
        <div className='grid gap-10 md:grid-cols-3'>
          {aboutuConstant.vision.cards.map((val, idx) => (
            <CardVision
              name={val.name}
              content={val.content}
              image={val.img}
              key={idx}
              onClick={(event: any) => handleModal(event)}
            />
          ))}
        </div>

        {/* Modal */}
        <ModalOpacity isModal={isModal} onClick={(event: any) => handleModal(event)}>
          <div
            className={classNames('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 'modal-container')}
          >
            <div
              className={classNames(
                'relative p-8 min-w-[350px] max-w-[555px] max-h-[477px] bg-white rounded-[2rem] md:py-12 md:px-16',
                'modal-content'
              )}
            >
              <div className='mb-7'>
                <p className='font-prompts font-medium text-center h3'>Convenient Medicine</p>
              </div>

              <div>
                <p className='font-prompts tracking-wide text-center line-clamp-14 md:line-clamp-10 subtitle'>
                  NEXX Pharma เรามั่นใจว่าลูกค้าในทุกพื้นที่ จะได้รับบริการ อย่างทั่วถึง
                  ด้วยบริการจัดส่งยาแบบด่วนให้ลูกค้าได้รับทันทีภายในหนึ่งวันและจัดส่งแบบพัสดุสําหรับในพ้ืนท่ีกรุงเทพและต่างจังหวัด
                  รอรับได้ภายใน 2-3 วันไม่ต้องออกจากบ้าน ก็รับยาดูแลตัวเอง ดูแลคนท่ีรักได้เต็มที่
                </p>
              </div>

              <div
                className='absolute top-0 right-0 translate-x-5 -translate-y-5 cursor-pointer'
                onClick={(event: any) => handleModal(event)}
              >
                <ImageLoader width={60} height={60} src='/images/icons/cancel-modal.png' />
              </div>
            </div>
          </div>
        </ModalOpacity>
      </div>
    </section>
  )
}
