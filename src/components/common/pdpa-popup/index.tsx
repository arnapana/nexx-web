import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  isClose: boolean
  onChangeHandle: (state: boolean, action: boolean) => void
}

export const PdpaPopup: NextPage<Props> = ({ isClose, onChangeHandle }) => {
  return (
    <AnimatePresence>
      {isClose && (
        <motion.div initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: 300 }} className='fixed bottom-0 left-0 z-30 w-full '>
          <div className='flex justify-center'>
            <div className='w-full h-[12rem] bg-white border-t md:h-[7.5rem]'>
              <div className='container mx-auto'>
                <div className='py-10 md:py-5'>
                  <div className='mb-2'>
                    <p className='text-sm md:text-base'>
                      เว็บไซต์นี้มีการจัดเก็บคุกกี้ (Cookies) เพื่อวัตถุประสงค์ในการปรับปรุงประสบการณ์ของผู้ใช้งานให้ดียิ่งขึ้น
                      การใช้งานเว็บไซต์นี้เป็นการยอมรับข้อกำหนดและ ยินยอมการจัดเก็บคุกกี้ดังกล่าว โดยท่านสามารถดูราย ละเอียดเพิ่มเติมได้ใน
                      <Link href='/privacy-policy' passHref>
                        <span className='mx-2 underline cursor-pointer'>นโยบายความเป็นส่วนตัว</span>
                      </Link>
                      ของบริษัทฯ
                    </p>
                  </div>
                  <div className='flex justify-end'>
                    <div className='flex flex-col space-x-5 md:flex-row'>
                      <button
                        className='group flex justify-center items-center p-2 px-5 space-x-3 w-32 h-[40px] bg-primary hover:bg-white rounded hover:outline-1 hover:outline-primary hover:outline transition-colors duration-200  md:px-8 md:h-[35px]'
                        onClick={() => onChangeHandle(!isClose, true)}
                      >
                        <p className='font-kanits text-white group-hover:text-primary whitespace-nowrap transition-colors duration-200 md:text-base '>
                          ยอมรับ
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
