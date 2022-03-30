import React from 'react'
import Link from 'next/link'
import { ImageLoader } from '@components/common'
import { CardSocial } from '@components/index'

const Footer: React.FC = () => {
  return (
    <nav className='flex flex-col'>
      {/* Footer Navgiation */}
      <div className='bg-primary h-[510px]'>
        <div className='container mx-auto py-14 w-full h-full'>
          <div className='grid grid-cols-4 gap-5 w-full h-full'>
            <div className='col-span-ๅ'>
              <div className='w-full h-full flex flex-col justify-center'>
                <div></div>
                <div className='font-prompts text-base text-white'>
                  ร้านยาเน็กซ์ฟาร์มา
                  <p>
                    บริษัท แมกซ์ เวนเจอร์ส จำกัด สำนักงานใหญ่ เลขที่ 90 อาคารซีดับเบิ้ลยู ทาวเวอร์ เอ ชั้นที่ 33
                    ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
                  </p>
                  <p>โทร. 065-523-5074</p>
                </div>
              </div>
            </div>
            <div>
              <ul className='font-prompts text-white space-y-3'>
                <li className='font-bold text-xl '>หน้าทางลัด</li>
                <li>
                  <a>หน้าแรก</a>
                </li>
                <li>
                  <a>Telepharmacy</a>
                </li>
                <li>
                  <a>ร้านค้าของเรา</a>
                </li>
                <li>
                  <a>รีวิวลูกค้า</a>
                </li>
                <li>
                  <a>บทความ</a>
                </li>
                <li>
                  <a>ติดต่อเรา</a>
                </li>
              </ul>

              <ul className='font-prompts text-white space-y-3'>
                <li className='font-prompts font-bold text-xl text-white mt-10'>เกี่ยวกับเรา</li>
                <li>
                  <a>เกี่ยวกับเรา</a>
                </li>
                <li>
                  <a>บรืการของเรา</a>
                </li>
              </ul>
            </div>
            <div>
              {/* Policy */}
              <ul className='font-prompts text-white space-y-3'>
                <li className='font-prompts font-bold text-xl text-white'>ข้อมูลทางกฏหมาย</li>
                <li>
                  <a>เงื่อนไขและข้อกำหนด</a>
                </li>
                <li>
                  <a>นโยบายความเป็นส่วนตัว</a>
                </li>
                <li>
                  <a>กฏหมายที่เกี่ยวข้อง</a>
                </li>
              </ul>

              {/* Aboutus */}
              <ul className='font-prompts text-white space-y-3 mt-9'>
                <li className='font-prompts font-bold text-xl text-white'>เกี่ยวกับพีทีแมกซ์การ์ด</li>
                <li>
                  <a>รายละเอียด</a>
                </li>
                <li>
                  <a>สมัครสมาชิก</a>
                </li>
              </ul>
            </div>
            <div className='col-span-1'>
              <div className='w-full h-full flex flex-col justify-start p-2'>
                <div className='relative bg-white rounded-3xl w-[363px] h-[218px] mb-5'>
                  <button className='absolute left-6 top-5 bg-secondary flex flex-row justify-center items-center p-2 rounded-lg'>
                    <ImageLoader width={18} height={18} src='/images/icons/right-arrow.png' />
                    <span className='font-poppins font-bold text-sm text-white ml-2'>Get Direction</span>
                  </button>
                </div>
                <div>
                  <p className='font-prompts font-medium text-xl text-white my-3'>ช่องทางติดต่อ</p>
                  <div className='flex flex-row items-center space-x-5'>
                    <CardSocial width={14} height={26} img='/images/icons/fb.png' alt='facebook' link='' />
                    <CardSocial width={22} height={25} img='/images/icons/shoppee.png' alt='shoppee' link='' />
                    <CardSocial width={25} height={27} img='/images/icons/line.png' alt='line' link='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer RIGHT */}
      <div className='bg-[#1f1f1f] text-white h-[68px]'>
        <div className='container mx-auto w-full h-full'>
          <div className='w-full h-full flex items-center justify-center'>
            <p className='font-prompts font-light text-lg'>NEXX PHARMA © 2021 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
