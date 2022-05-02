import React, { useState } from 'react'
import { Button, ImageLoader, ModalOpacity } from '@components/common'

interface ICardHighLight {
  src: string
  alt: string
  title: string
  content: string
  width: number
  height: number
}

export const CardHighLight: React.FC<ICardHighLight> = ({ src, alt, title, content, width, height }) => {
  const [isModal, setModal] = useState<boolean>(false)

  const handleModal = (event: any) => {
    event.stopPropagation()
    setModal((val) => !val)
  }

  return (
    <div className=' my-8 md:mx-2 lg:p-5 lg:m-0 lg:my-10 2xl:my-20'>
      <div className='flex relative flex-col items-center py-10 px-9  w-[20rem] h-full bg-white rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)] md:h-[22.5rem] 2xl:w-[25rem] 2xl:h-[27.5rem]'>
        {/* Icon */}
        <div>
          <ImageLoader width={width} height={height} src={src} alt={alt} />
        </div>
        {/* Header */}
        <div className='my-5'>
          <h4 className='font-prompts text-xl font-medium text-center 2xl:text-2xl'>{title}</h4>
        </div>
        {/* Content */}
        <div className='px-5'>
          <p className='font-prompts text-center line-clamp-5 md:text-lg  md:line-clamp-3  2xl:text-xl 2xl:line-clamp-7'>
            {content}
          </p>
        </div>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
          <Button
            name='ดูเพิ่มเติ่ม'
            onClick={(event: any) => handleModal(event)}
            innerClassName='w-[145px] md:w-[170px] 2xl:w-[190px]'
          />
        </div>
      </div>

      {/* Modal */}
      <ModalOpacity isModal={isModal} onClick={(event: any) => handleModal(event)}>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='relative p-8 min-w-[350px] max-w-[647px] max-h-[477px] bg-white rounded-[2rem] md:py-12 md:px-16'>
            <div className='mb-7'>
              <p className='font-prompts font-medium text-center h3'>
                Telepharmacy <br /> ปรึกษาเภสัชกรและแพทย์ออนไลน์
              </p>
            </div>

            <div>
              <p className='font-prompts tracking-wide text-center line-clamp-14 md:line-clamp-10 subtitle'>
                ให้การเข้าถึงคำแนะนำด้านสุขภาพเป็นเรื่องง่าย ด้วยบริการ พบเภสัชกรและแพทย์เฉพาะทางในรูปแบบออนไลน์
                เพื่อรับ คำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้
                ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล
                เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง
                พร้อมบริการส่งยาแบบด่วนรอรับได้ภายในหนึ่งวัน หรือจัดส่งแบบพัสดุในพื้นที่กรุงเทพและต่างจังหวัด
                มั่นใจว่าทุกคนในทุกพื้นที่จะได้รับการให้บริการที่ทั่วถึงและครอบคลุม
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
  )
}
