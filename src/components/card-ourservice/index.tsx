import React, { useState } from 'react'
import { ImageLoader } from '@components/common'

const limitContent = "ให้การเข้าถึงคำแนะนำด้านสุขภาพเป็นเรื่องง่าย ด้วยบริการพบเภสัชกรและแพทย์เฉพาะทางในรูปแบบออนไลน์ เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้ ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง พร้อมบริการส่ง เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้ ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง พร้อมบริการส่ง"

interface ICardService {}

export const CardOurService: React.FC<ICardService> = () => {
  const [limitText,setLimitText] = useState<string>(limitContent)
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen((val) => !val)
    console.log(isOpen)
  }

  return (
    <div>
      <div
        className={`py-[3.75rem] px-[5.65rem] w-full bg-white rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]`}
      >
        <div
          className={`overflow-hidden ${
            isOpen ? 'max-h-[1240px]' : 'max-h-[253px]'
          } p-5 transition-[max-height] duration-300 ease-in-out flex relative justify-start break-all`}
        >
          <div className='w-[30%]'>
            <ImageLoader src='/images/service/img1.png' width={222} height={222} />
          </div>
          <div className='relative w-[70%] '>
            <div className='mb-4'>
              <p className='font-prompts font-semibold text-primary'>Telepharmacy : เภสัชกรและแพทย์ทางไกล</p>
            </div>
            <div className='mb-4'>
              <p className='font-prompts text-primary'>
                ตอบทุกคำถามด้านสุขภาพโดยผู้รู้ ให้คำปรึกษาเรื่องยาโดยเภสัชกร
                หรือปัญหาสุขภาพแบบครบวงจรโดยบุคลากรทางแพทย์เฉพาะทาง ในรูปแบบออนไลน์{' '}
              </p>
            </div>

            <div className=''>
              <p className={`font-prompts text-xl`}>
                <div className={`inline-block bg-white`}>
                  {limitText.slice(0, isOpen ? limitText.length : 320)}
                  {!isOpen ? (
                    <span className='ml-5 cursor-pointer text-secondary' onClick={() => handleOpen()}>
                      อ่านเพิ่มเติม...
                    </span>
                  ) : (
                    <span className='ml-5 text-black cursor-pointer' onClick={() => handleOpen()}>
                      อ่านน้อยลง...
                    </span>
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
