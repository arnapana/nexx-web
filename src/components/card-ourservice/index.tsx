import React, { useState } from 'react'
import { ImageLoader } from '@components/common'

const limitContent =
  'ให้การเข้าถึงคำแนะนำด้านสุขภาพเป็นเรื่องง่าย ด้วยบริการพบเภสัชกรและแพทย์เฉพาะทางในรูปแบบออนไลน์ เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้ ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง พร้อมบริการส่ง เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้ ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง พร้อมบริการส่ง'

interface ICardService {}

export const CardOurService: React.FC<ICardService> = () => {
  const [limitText, setLimitText] = useState<string>(limitContent)
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen((val) => !val)
  }

  return (
    <div className='md:px-10'>
      <div
        className={`md:py-[3.75rem] md:px-[5.65rem] w-full bg-white rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]`}
      >
        <div
          className={`overflow-hidden ${
            isOpen ? 'max-h-[1240px]' : 'max-h-[583px] md:max-h-[273px]'
          } p-5 transition-[max-height] duration-300 ease-in-out flex flex-col md:flex-row relative justify-start break-all`}
        >
          <div className='flex justify-center items-start mb-5 md:justify-start md:mb-0 md:w-[30%]'>
            <div className=''>
              <ImageLoader src='/images/service/img1.png' width={222} height={222} />
            </div>
          </div>
          <div className='relative md:w-[70%] '>
            <div className='mb-4'>
              <p className='font-prompts font-semibold text-center text-primary md:text-left'>
                Telepharmacy : เภสัชกรและแพทย์ทางไกล
              </p>
            </div>
            <div className='mb-4'>
              <p className='font-prompts text-primary'>
                ตอบทุกคำถามด้านสุขภาพโดยผู้รู้ ให้คำปรึกษาเรื่องยาโดยเภสัชกร
                หรือปัญหาสุขภาพแบบครบวงจรโดยบุคลากรทางแพทย์เฉพาะทาง ในรูปแบบออนไลน์{' '}
              </p>
            </div>

            <div className=''>
              <p className={`font-prompts text-sm md:text-xl`}>
                <div className={`inline-block bg-white`}>
                  {limitText.slice(0, isOpen ? limitText.length : 295)}
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
