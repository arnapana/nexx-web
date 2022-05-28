import React from 'react'
import { NextPage } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@components/common'

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
                    <p className='text-base'>เว็ปไซต์นี้ใช้คุกกี้</p>
                    <p className='text-sm md:text-base'>
                      เราใช้งานคุกกี้เพื่อประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็ปไซต์
                      คุณสามารถเลือกตั้งค่าความยินยอมการใช้งานคุกกี้ได้ โดยคลิก &quot;ยอมรับ&quot;
                    </p>
                  </div>
                  <div className='flex justify-end'>
                    <div className='flex flex-col space-x-5 md:flex-row'>
                      <button
                        className='group flex justify-center items-center p-2 px-5 space-x-3 w-32 h-[40px] bg-primary hover:bg-white rounded hover:outline-1 hover:outline-primary hover:outline transition-colors duration-200  md:px-8 md:h-[35px]'
                        onClick={() => onChangeHandle(!isClose, true)}
                      >
                        <p className='font-prompts text-white group-hover:text-primary whitespace-nowrap transition-colors duration-200 md:text-base '>
                          ยอมรับ
                        </p>
                      </button>
                      {/* <button
                        className='group flex justify-center items-center p-2 px-5 space-x-3 h-[40px] w-32 bg-white hover:bg-primary rounded border border-primary transition-colors duration-200 md:px-8 md:h-[40px]'
                        onClick={() => onChangeHandle(!isClose, false)}
                      >
                        <p className='font-prompts text-primary group-hover:text-white whitespace-nowrap transition-colors duration-200 md:text-base '>
                          ไม่ยอมรับ
                        </p>
                      </button> */}
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
