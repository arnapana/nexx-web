import React from 'react'
import Link from 'next/link'
import { ImageLoader } from '@components/common'
import { CardSocial } from '@components/index'

import styles from './footer.module.css'

const Footer: React.FC = () => {
  return (
    <nav className='flex flex-col'>
      {/* Footer Navgiation */}
      <div className='bg-primary min-h-[510px]'>
        <div className='container mx-auto py-14 w-full h-full'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full h-full'>
            <div className='col-span-2 md:col-span-1'>
              <div className='w-full h-full flex flex-col justify-start'>
                <div className='mb-8 relative w-[calc(4vw_+_160px)] h-[calc(1vw_+_80px)] '>
                  <ImageLoader src='/images/logo-footer.png' layout='fill' />
                </div>
                <div className='font-prompts text-base text-white'>
                  <p className='text-base'>ร้านยาเน็กซ์ฟาร์มา</p>
                  <p className='font-light text-sm md:text-base'>
                    บริษัท แมกซ์ เวนเจอร์ส จำกัด สำนักงานใหญ่ เลขที่ 90 อาคารซีดับเบิ้ลยู ทาวเวอร์ เอ ชั้นที่ 33
                    ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
                  </p>
                  <p className='font-light'>โทร. 065-523-5074</p>
                </div>
              </div>
            </div>
            <div>
              <ul className='footer-list font-prompts text-white space-y-1 md:space-y-3'>
                <li className={styles.footerHeaderList}>หน้าทางลัด</li>
                <li>
                  <a className={styles.footerList}>หน้าแรก</a>
                </li>
                <li>
                  <a className={styles.footerList}>Telepharmacy</a>
                </li>
                <li>
                  <a className={styles.footerList}>ร้านค้าของเรา</a>
                </li>
                <li>
                  <a className={styles.footerList}>รีวิวลูกค้า</a>
                </li>
                <li>
                  <a className={styles.footerList}>บทความ</a>
                </li>
                <li>
                  <a className={styles.footerList}>ติดต่อเรา</a>
                </li>
              </ul>

              <ul className='font-prompts text-white space-y-1 md:space-y-3 mt-9'>
                <li className={styles.footerHeaderList}>เกี่ยวกับเรา</li>
                <li>
                  <a className={styles.footerList}>เกี่ยวกับเรา</a>
                </li>
                <li>
                  <a className={styles.footerList}>บรืการของเรา</a>
                </li>
              </ul>
            </div>
            <div>
              {/* Policy */}
              <ul className='font-prompts text-white space-y-1 md:space-y-3'>
                <li className={styles.footerHeaderList}>ข้อมูลทางกฏหมาย</li>
                <li>
                  <a className={styles.footerList}>เงื่อนไขและข้อกำหนด</a>
                </li>
                <li>
                  <a className={styles.footerList}>นโยบายความเป็นส่วนตัว</a>
                </li>
                <li>
                  <a className={styles.footerList}>กฏหมายที่เกี่ยวข้อง</a>
                </li>
              </ul>

              {/* Aboutus */}
              <ul className='font-prompts text-white space-y-1 md:space-y-3 mt-9'>
                <li className={styles.footerHeaderList}>เกี่ยวกับพีทีแมกซ์การ์ด</li>
                <li>
                  <a className={styles.footerList}>รายละเอียด</a>
                </li>
                <li>
                  <a className={styles.footerList}>สมัครสมาชิก</a>
                </li>
              </ul>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <div className='w-full h-full flex flex-col justify-start p-2'>
                <div className='relative bg-white rounded-3xl max-w-[363px] h-[218px] mb-5 overflow-hidden'>
                  <button className='absolute left-6 top-5 bg-secondary flex flex-row justify-center items-center p-2 rounded-lg'>
                    <ImageLoader width={18} height={18} src='/images/icons/right-arrow.png' />
                    <span className='font-poppins font-semibold text-sm text-white ml-2'>Get Direction</span>
                  </button>
                  <iframe
                    className='border-0 -mt-20 w-full h-[450px]'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.413107201355!2d100.90005111528926!3d12.945396690873062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3446075ca93b38f!2zMTLCsDU2JzQzLjQiTiAxMDDCsDU0JzA4LjEiRQ!5e0!3m2!1sth!2sth!4v1648752408749!5m2!1sth!2sth'
                    allowFullScreen={true}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
                <div className=''>
                  <p className='font-prompts font-medium text-xl text-white my-3'>ช่องทางติดต่อ</p>
                  <div className='w-full flex flex-row items-center space-x-5'>
                    <CardSocial width={14} height={26} img='/images/icons/facebook.png' alt='facebook' link='' />
                    <CardSocial width={25} height={27} img='/images/icons/line.png' alt='line' link='' />
                    <CardSocial width={22} height={25} img='/images/icons/shoppee.png' alt='shoppee' link='' />
                    <CardSocial width={25} height={27} img='/images/icons/call.png' alt='line' link='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer RIGHT */}
      <div className='bg-[#1f1f1f] text-white h-9 md:h-[68px]'>
        <div className='container mx-auto w-full h-full'>
          <div className='w-full h-full flex items-center justify-center'>
            <p className='font-prompts font-light text-sm md:text-lg'>NEXX PHARMA © 2021 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
