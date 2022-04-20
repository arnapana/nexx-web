import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { useResize } from '@hooks/useResize'
import { ImageLoader } from '@components/common'

const limitContent =
  'ให้การเข้าถึงคำแนะนำด้านสุขภาพเป็นเรื่องง่าย ด้วยบริการพบเภสัชกรและแพทย์เฉพาะทางในรูปแบบออนไลน์ เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้ ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง พร้อมบริการส่ง เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้ ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง พร้อมบริการส่ง'

interface ICardService {}

export const CardOurService: React.FC<ICardService> = () => {
  const eleRef = useRef<HTMLDivElement>(null)
  const { width, height } = useResize(eleRef)
  const [limitText, setLimitText] = useState<number>(Math.ceil(width / 4))
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen((val) => !val)
  }

  useEffect(() => {
    if (width > 1280){
      setLimitText(314)
    } else if (width > 768){
      setLimitText(275)
    } else {
      setLimitText(110)
    }
  }, [width, height])

  console.log(width, height, limitText)

  return (
    <div className='md:px-10' ref={eleRef}>
      <div
        className={`p-5 md:p-10 2xl:py-[3.75rem] 2xl:px-[5.65rem] w-full bg-white rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]`}
      >
        <div
          className={classNames(
            `overflow-hidden ${
              isOpen ? 'max-h-[1240px]' : 'max-h-[485px] xl:max-h-[233px]'
            } transition-[max-height] duration-300 ease-in`,
            'grid grid-cols-1 xl:grid-cols-4 md:gap-3'
          )}
        >
          <div className='col-span-1 p-5'>
            <div className='grid place-content-center xl:justify-start'>
              <ImageLoader src='/images/service/img1.png' width={200} height={200} />
            </div>
          </div>
          <div className='col-span-3 px-5 pb-5'>
            <div className='relative'>
              {/* Title */}
              <div className='mb-4'>
                <p className='font-prompts font-semibold text-center text-primary md:text-left'>
                  Telepharmacy : เภสัชกรและแพทย์ทางไกล
                </p>
              </div>
              {/* Sub Title */}
              <div className='mb-4'>
                <p className='font-prompts text-sm text-primary md:text-lg 2xl:text-xl'>
                  ตอบทุกคำถามด้านสุขภาพโดยผู้รู้ ให้คำปรึกษาเรื่องยาโดยเภสัชกร
                  หรือปัญหาสุขภาพแบบครบวงจรโดยบุคลากรทางแพทย์เฉพาะทาง ในรูปแบบออนไลน์
                </p>
              </div>

              {/* Content */}
              <div>
                <p className={`font-sarabun text-sm md:text-lg 2xl:text-xl bg-white leading-5`}>
                  {isOpen ? limitContent : limitContent.substring(0, limitText)}
                  {isOpen ? (
                    <span
                      className='ml-5  text-sm text-black animate-fade-in cursor-pointer md:text-lg 2xl:text-xl'
                      onClick={() => handleOpen()}
                    >
                      <a>อ่านน้อยลง...</a>
                    </span>
                  ) : (
                    <span
                      className='ml-5 text-sm animate-fade-in cursor-pointer md:text-lg 2xl:text-xl text-secondary'
                      onClick={() => handleOpen()}
                    >
                      <a>อ่านเพิ่มเติม...</a>
                    </span>
                  )}
                </p>
              </div>
              {/* Read more */}
              {/* {!isOpen && (
                <div
                  className={classNames(
                    'absolute z-50 bg-white',
                    'right-0 top-[196px]',
                    'md:right-0 md:top-[200px]',
                    '2xl:right-0 2xl:top-[203px]'
                  )}
                >
                  <span
                    className='ml-5 text-sm animate-fade-in cursor-pointer md:text-lg 2xl:text-xl text-secondary'
                    onClick={() => handleOpen()}
                  >
                    <a>อ่านเพิ่มเติม...</a>
                  </span>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
