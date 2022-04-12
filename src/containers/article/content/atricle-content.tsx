import React from 'react'
import { ImageLoader } from '@components/common'
import { ButtonTag } from '@components/index'

export const ArticleContentContainer = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-16'>
          <div className='mb-5 text-center'>
            <p className='font-poppins font-medium h1'>Computer Vision Syndrome (CVS) :</p>
            <p className='font-prompts font-medium h1'>โรคใกล้ตัวของคนทำงานยุคใหม่เพราะจ้องหน้าจอมากเกินไป</p>
          </div>
          <div className='mb-5'>
            <p className='font-prompts font-normal text-center'>
              โพสต์เมื่อ <span>01 มกราคม 2564</span> โดย <span>บูติกเด้อ โปรโมท</span>
            </p>
          </div>
          <div className='flex justify-center space-x-5'>
            <ButtonTag name='สุขภาพ' />
            <ButtonTag name='ความเคลียด' />
          </div>
        </div>
        {/* Image */}
        <div className='grid place-items-center'>
          <ImageLoader
            className='rounded-[50px]'
            src='/images/aboutus/card-review-large.png'
            width={1070}
            height={640}
          />
        </div>
        {/* Content */}
        <div className='flex py-24 px-32'>
          <div className='mr-16'>
            <ul className='space-y-3'>
              <li>
                <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                  <ImageLoader src='/images/icons/icon-fb.png' width={13} height={26} />
                </button>
              </li>
              <li>
                <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                  <ImageLoader src='/images/icons/icon-line.png' width={26} height={26} />
                </button>
              </li>
              <li>
                <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                  <ImageLoader src='/images/icons/icon-link.png' width={23} height={23} />
                </button>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
