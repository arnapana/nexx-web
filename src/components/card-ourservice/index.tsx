import React, { useState } from 'react'
import { ImageLoader } from '@components/common'

interface ICardService {}

export const CardOurService: React.FC<ICardService> = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen((val) => !val)
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
          onClick={handleOpen}
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
              <p className={`font-prompts text-xl whitespace-pre-line`}>
                แบบออนไลน์ เพื่อรับคำปรึกษาได้อย่างสะดวกและรวดเร็ว โดยรับคำปรึกษาในรูปแบบที่เลือกได้
                ทั้งแบบพิมพ์ข้อความปรึกษาออนไลน์หรือในรูปแบบวิดีโอคอล
                เราครอบคลุมการดูแลแบบครบวงจรไปจนถึงขั้นตอนสั่งจ่ายยาจากเภสัชกรและแพทย์เฉพาะทาง
                พร้อมบริการส่งยาแบบด่วนรอรับได้ภายในหนึ่งวัน หรือจัดส่งแบบพัสดุในพื้นที่กรุงเทพและต่างจังหวัด
                มั่นใจว่าทุกคนในทุกพื้นที่จะได้รับการให้บริการที่ทั่วถึงและครอบคลุม ขั้นตอนในการใช้บริการ Telepharmacy
                1. Register : ลงทะเบียนเพื่อใช้งาน ใช้เบอร์โทรศัพท์เพื่อลงทะเบียน กรอกข้อมูลส่วนตัว 2. Choose Services :
                เลือกบริการที่ต้องการ ปรึกษาแพทย์เฉพาะทาง (สามารถนัดหมายเวลาได้) ปรึกษาเภสัชกร (โดย NEXX Pharma) 3. Fill
                in Health Record : กรอกข้อมูลด้านสุขภาพเบื้องต้น กรอกข้อมูลด้านสุขภาพโดยคําถามคัดกรอง
                เลือกอาการป่วยเบื้องต้นและหัวข้อที่ต้องการปรึกษา 4. Video Consultation : รับคำปรึกษาออนไลน์
                พบเภสัชกรหรือแพทย์เพื่อรับฟังคำแนะนำผ่าน video call 5. Confirm Medication And Payment :
                ยืนยันและชำระเงิน ตรวจสอบรายการยาพร้อมชําระเงิน ผูกบัตร PT Max card
                เพื่อรับสิทธิประโยชน์สำหรับการใช้งานในอนาคต กรณีที่ปรึกษาแพทย์
                ใบสั่งยาจะถูกส่งมายังเภสัชกรให้เป็นผู้จ่ายยา 6. Delivery : จัดส่งยาถึงหน้าบ้าน
                เลือกช่องทางการจัดส่งแบบด่วนเพื่อรอรับภายในหนึ่งวัน หรือส่งแบบพัสดุ สําหรับลูกค้าในกรุงเทพ
                และลูกค้าต่างจังหวัด
                {/* <div className={`${isOpen ? 'block' : 'absolute'} right-0 -bottom-[10%] px-3 bg-white`}>
                  {!isOpen ? (
                    <p className='ml-2 cursor-pointer text-secondary' onClick={handleOpen}>
                      อ่านเพิ่มเติม...
                    </p>
                  ) : (
                    <span className='ml-2 text-black cursor-pointer' onClick={handleOpen}>
                      อ่านน้อยลง...
                    </span>
                  )}
                </div> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
